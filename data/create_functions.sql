DELIMITER //
CREATE TRIGGER `upto30Songs` BEFORE INSERT ON `TrackInPlaylist`
FOR EACH ROW 
BEGIN
	DECLARE counter integer;
	DECLARE errorMessage VARCHAR(100);
	SELECT COUNT(*) INTO counter
		FROM `TrackInPlaylist`
		WHERE playlist_id = New.playlist_id;
	IF (counter > 29) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error: Cannot have more than 30 songs in playlist';
	END IF;
END; //

DELIMITER //
CREATE PROCEDURE reindexPlaylist (playlistId INT)
BEGIN
	DECLARE correctIndex INT DEFAULT 0;
	DECLARE currentIndex INT;
	DECLARE no_more_data BOOLEAN DEFAULT false;
	DECLARE trackCursor CURSOR FOR SELECT `idx` FROM `TrackInPlaylist` WHERE `playlist_id` = playlistId AND `idx` >= 0 ORDER BY `idx`;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET no_more_data = true;

	OPEN trackCursor;

	WHILE (no_more_data = false) DO
		FETCH trackCursor INTO currentIndex;

		UPDATE `TrackInPlaylist`
		SET `idx` = correctIndex - 1
		WHERE `idx` = currentIndex AND `playlist_id` = playlistId;

		SET correctIndex = correctIndex - 1;
	END WHILE;

	CLOSE trackCursor;

	UPDATE `TrackInPlaylist`
	SET `idx` = -`idx` - 1
	WHERE `playlist_id` = playlistId;
END; //

DELIMITER //
CREATE FUNCTION clonePlaylist (playlistId INT, dstUser VARCHAR(20))
RETURNS INT
BEGIN
    DECLARE cloneName VARCHAR(20);
	DECLARE cloneId INT;

    SELECT `name` INTO cloneName FROM `Playlist` WHERE `playlist_id` = playlistId;

    INSERT INTO `Playlist` (`name`, `public`, `username`)
    VALUES (cloneName, 1, dstUser);

    SELECT LAST_INSERT_ID() INTO cloneId;
    
	INSERT INTO `TrackInPlaylist`
    SELECT `idx`, cloneId, `title`, `artist_id` FROM `TrackInPlaylist`
    WHERE `playlist_id` = playlistId;

    RETURN cloneId;
END; //

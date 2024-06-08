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
CREATE FUNCTION getTrackRank (trackArtist INT, trackTitle VARCHAR(20))
RETURNS INT
BEGIN
	DECLARE trackRank INT;
	DECLARE tipCheck INT;

	SELECT COUNT(*) INTO tipCheck FROM `TrackInPlaylist`;

	IF tipCheck = 0 THEN
		RETURN 1;
	END IF;

	IF ((trackArtist, trackTitle) IN (SELECT artist_id, title FROM `TrackInPlaylist`)) THEN
		WITH `Ranking` AS 
        	(SELECT t.artist_id, t.title, COUNT(DISTINCT p.username) as userCount, RANK() OVER(ORDER BY userCount DESC) rank 
			FROM `Track` t NATURAL JOIN `TrackInPlaylist` tp NATURAL JOIN `Playlist` p
			GROUP BY t.artist_id, t.title)
		SELECT rank INTO trackRank FROM `Ranking` WHERE title = trackTitle AND artist_id = trackArtist;
	ELSE
		WITH `Ranking` AS 
        	(SELECT t.artist_id, t.title, COUNT(DISTINCT p.username) as userCount, RANK() OVER(ORDER BY userCount DESC) rank 
			FROM `Track` t NATURAL JOIN `TrackInPlaylist` tp NATURAL JOIN `Playlist` p
			GROUP BY t.artist_id, t.title)
		SELECT MAX(rank) + 1 INTO trackRank FROM `Ranking`;
	END IF;
	
	RETURN trackRank;
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

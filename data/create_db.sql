CREATE TABLE `User`(
    username VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    join_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(username)
);

CREATE TABLE `Artist`(
    artist_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    join_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    producer VARCHAR(20),
    PRIMARY KEY(artist_id)
);

CREATE TABLE `Track`(
    title VARCHAR(20) NOT NULL,
    artist_id INT NOT NULL,
    genre VARCHAR(20) NOT NULL,
    length INT NOT NULL,
    explicitness BOOLEAN NOT NULL,
    PRIMARY KEY(title, artist_id),
    FOREIGN KEY(artist_id) REFERENCES `Artist`(artist_id) 
    	ON DELETE CASCADE 
    	ON UPDATE RESTRICT
);

CREATE TABLE `Playlist`(
    playlist_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    public BOOLEAN NOT NULL,
    username VARCHAR(20),
    PRIMARY KEY(playlist_id),
    FOREIGN KEY(username) REFERENCES `User`(username)
    	ON DELETE SET NULL
    	ON UPDATE CASCADE
);

CREATE TABLE `TrackInPlaylist`(
    idx INT NOT NULL,
    playlist_id INT NOT NULL,
    title VARCHAR(20) NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY(idx, playlist_id),
    FOREIGN KEY(playlist_id) REFERENCES `Playlist`(playlist_id) 
    	ON DELETE CASCADE 
    	ON UPDATE RESTRICT,
    FOREIGN KEY(title, artist_id) REFERENCES `Track`(title, artist_id) 
    	ON DELETE CASCADE 
    	ON UPDATE RESTRICT
);
INSERT INTO `User` (username, name)
VALUES 
    ('ristn', 'Nicolas Rist'),
    ('bob063', 'Robert Smith'),
    ('k390', 'Andrew Ocon'),
    ('tourist', 'Gennady Korotkevich'),
    ('BenQ', 'Benjamin Qi'),
    ('jqdai0815', 'Jiangqi Dai'),
    ('Radewoosh', 'Mateusz Radecki'),
    ('Petr', 'Petr Mitrichev'),
    ('TheScrasse', 'Valerio Stancanelli'),
    ('maomao90', 'Tia Shi Wei');

INSERT INTO `Artist` (name, producer)
VALUES 
	('Bob Marley', 'Chris Blackwell'),
	('Aerosmith', 'Jack Douglass'),
	('Eric Clapton', 'Glyn Johns'),
	('A$AP Rocky', NULL),
	('Kendrick Lamar', 'Dr. Dre'),
	('Queen', 'David Richards'),
	('The Beatles', 'George Martin'),
	('Chance Peña', NULL),
	('Cro', NULL),
	('Hans Zimmer', NULL);

INSERT INTO `Track`
VALUES
    ('I Shot The Sheriff', 1, 'Reggae', 250, False),
    ('I Shot The Sheriff', 3, 'Blues', 445, False),
    ('Dream On', 2, 'Rock', 200, False),
    ('Cryin', 2, 'Rock', 230, False),
    ('Praise The Lord', 4, 'Hiphop', 227, True),
    ('i', 5, 'Hiphop', 138, True),
    ('Don’t Stop Me Now', 6, 'Rock', 300, False),
    ('Let It Be', 7, 'Rock', 203, False),
    ('Traum', 9, 'Pop', 224, True),
    ('No Time For Caution', 10, 'Movie', 347, False);	

INSERT INTO `Playlist` (name, public, username)
VALUES
	('Rock Hits', True, 'ristn'),
	('Sad Blues', False, 'Radewoosh'),
	('Car Playlist', True, 'maomao90'),
	('Pop', True, 'tourist'),
	('Movie Mix 2024', True, 'ristn'),
	('Sad Songs', False, 'Petr'),
	('Classic Hits', True, 'bob063'),
	('Cool Be3tz', True, 'Radewoosh'),
	('More Eric Clapton', False, 'ristn'),
	('Reggae', True, 'k390');

INSERT INTO `TrackInPlaylist`
VALUES
    (0, 10, 'I Shot The Sheriff', 1),
    (0, 9, 'I Shot The Sheriff', 3),
    (0, 7, 'I Shot The Sheriff', 3),
    (1, 1, 'I Shot The Sheriff', 3),
    (0, 1, 'Dream On', 2),
    (2, 1, 'Cryin', 2),
    (0, 8, 'Praise The Lord', 4),
    (1, 8, 'i', 5),
    (1, 7, 'Don’t Stop Me Now', 6),
    (2, 7, 'Let It Be', 7),
    (0, 4, 'Traum', 9),
    (0, 5, 'No Time For Caution', 10),
    (1, 5, 'No Time For Caution', 10);
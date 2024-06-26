var db = require('../db');

module.exports = {
    getPlaylists: async (parameters) => {
        try {
            let filter = '';
            let terms = [];

            for (const [parameter, term] of Object.entries(parameters)) {
                filter = filter + (filter.length ? ' AND' : '') + ' `Playlist`.`' + parameter + '` = ?';
                terms.push(term);
            }

            const [results] = await db.query('SELECT `Playlist`.*, IF(`Track`.`length` IS NULL, 0, SUM(`Track`.`length`)) AS `length`, MAX(`Track`.`explicitness`) AS `is_explicit` FROM `Playlist` LEFT JOIN (`TrackInPlaylist` JOIN `Track` USING (`artist_id`, `title`)) ON `Playlist`.`playlist_id` = `TrackInPlaylist`.`playlist_id` GROUP BY `Playlist`.`playlist_id`' + (terms.length ? ' HAVING' + filter : ''), terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    createPlaylist: async (name, is_public, username) => {
        try {
            const [results] = await db.query('INSERT INTO `Playlist` (`name`, `public`, `username`) VALUES (?, ?, ?)', [name, is_public, username]);
            
            if(results.affectedRows === 1) {
                return results.insertId;
            }
        } catch (error) {
            console.error(error);
        }

        return 0;
    },
    updatePlaylist: async (newData, playlist_id) => {
        try {
            const [results] = await db.query('UPDATE `Playlist` SET ? WHERE `playlist_id` = ?', [newData, playlist_id]);
            
            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    },
    deletePlaylist: async (playlist_id) => {
        try {
            const [results] = await db.query('DELETE FROM `Playlist` WHERE `playlist_id` = ?', [playlist_id]);

            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    },
    clonePlaylist: async (playlist_id, username) => {
        try {
            const [results] = await db.query('SELECT clonePlaylist(?, ?) AS `playlist_id`', [playlist_id, username]);

            if(results.length === 1) {
                return results[0].playlist_id;
            }
        } catch (error) {
            console.error(error);
        }

        return 0;
    },
    reindexPlaylist: async (playlist_id) => {
        try {
            const [results] = await db.query('CALL reindexPlaylist(?)', [playlist_id]);

            if(results.affectedRows) {
                return results.affectedRows;
            }
        } catch (error) {
            console.error(error);
        }

        return 0;
    }
};
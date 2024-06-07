var db = require('../db');

module.exports = {
    getTracks: async (parameters) => {
        try {
            let filter = '';
            let terms = [];

            for (const [parameter, term] of Object.entries(parameters)) {
                filter = filter + (filter.length ? ' AND' : '') + ' `' + parameter + '` = ?';
                terms.push(term);
            }

            const [results] = await db.query('SELECT * FROM `Track` ' + (terms.length ? 'WHERE' + filter : ''), terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    getTracksWithArtist: async (parameters) => {
        try {
            let filter = '';
            let terms = [];

            for (const [parameter, term] of Object.entries(parameters)) {
                filter = filter + (filter.length ? ' AND' : '') + ' `Track`.`' + parameter + '` = ?';
                terms.push(term);
            }

            const [results] = await db.query('SELECT `Track`.*, `Artist`.`name` AS `artist_name` FROM `Track` JOIN `Artist` ON `Track`.`artist_id` = `Artist`.`artist_id` ' + (terms.length ? 'WHERE' + filter : ''), terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    createTrack: async (title, artist_id, genre, length, is_explicit) => {
        try {
            const [results] = await db.query('INSERT INTO `Track` (`title`, `artist_id`, `genre`, `length`, `explicitness`) VALUES (?, ?, ?, ?, ?)', [title, artist_id, genre, length, is_explicit]);
            
            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    },
    updateTrack: async (newData, title, artist_id) => {
        try {
            const [results] = await db.query('UPDATE `Track` SET ? WHERE `title` = ? AND `artist_id` = ?', [newData, title, artist_id]);
            
            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    },
    deleteTrack: async (title, artist_id) => {
        try {
            const [results] = await db.query('DELETE FROM `Track` WHERE `title` = ? AND `artist_id` = ?', [title, artist_id]);

            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    }
};
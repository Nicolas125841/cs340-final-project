var db = require('../db');

module.exports = {
    getTracksInPlaylist: async (parameters) => {
        try {
            let filter = '';
            let terms = [];

            for (const [parameter, term] of Object.entries(parameters)) {
                filter = filter + (filter.length ? ' AND' : '') + ' `' + parameter + '` = ?';
                terms.push(term);
            }

            console.log(filter, terms);

            const [results] = await db.query('SELECT * FROM `TrackInPlaylist` ' + (terms.length ? 'WHERE' + filter : ''), terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    addTrackToPlaylist: async (title, artist_id, genre, length, is_explicit) => {
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
    removeTrackFromPlaylist: async (title, artist_id) => {
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
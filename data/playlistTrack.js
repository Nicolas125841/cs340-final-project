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

            const [results] = await db.query('SELECT * FROM `TrackInPlaylist` JOIN `Artist` USING (`artist_id`)' + (terms.length ? ' WHERE' + filter : '') + ' ORDER BY `idx`', terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    removeTrackFromPlaylistReal: async (idx, playlist_id) => {
        try {

            const [results] = await db.query('DELETE FROM `TrackInPlaylist` WHERE `idx` = ? AND `playlist_id` = ?', [idx, playlist_id]);

            if (results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;

    },
    addTrackToPlaylistReal: async (idx, playlist_id, title, artist_id) => {
        try {     
            const [results] = await db.query("INSERT INTO `TrackInPlaylist` (`idx`, `playlist_id`, `title`, `artist_id`) VALUES (?, ?, ?, ?)", [idx, playlist_id, title, artist_id]);

            if (results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;

    },
    countTracksInPlaylist: async (parameters) => {
        try {


            let filter = '';
            let terms = [];

            for (const [parameter, term] of Object.entries(parameters)) {
                filter = filter + (filter.length ? ' AND' : '') + ' `' + parameter + '` = ?';
                terms.push(term);
            }

            console.log(filter, terms);

            const [results] = await db.query('SELECT COUNT(*) FROM `TrackInPlaylist` ' + (terms.length ? 'WHERE' + filter : ''), terms);

            return results;
        } catch(error) {
            console.error(error);
        }

        return undefined;

    }
};
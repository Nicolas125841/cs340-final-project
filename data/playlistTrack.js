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

            const [results] = await db.query('SELECT * FROM `TrackInPlaylist` JOIN `Artist` USING (`artist_id`) ' + (terms.length ? 'WHERE' + filter : ''), terms);

            if(results.length) {
                return results;
            }
        } catch(error) {
            console.error(error);
        }

        return [];
    },
    tracksNotInPlaylist: async (playlist_id) => {

        try {

            const [result] = await db.query('SELECT * FROM `Track` WHERE NOT EXISTS (SELECT 1 FROM `TrackInPlaylist` WHERE playlist_id = ? AND `Track`.artist_id = `TrackInPlaylist`.artist_id AND `Track`.title = `TrackInPlaylist`.title)', [playlist_id]);
        
        if(result.length) {
            return result;
        }
    } catch(error) {
        console.error(error);
    }

    return [];

    },
    updateIndices: async (new_idx, old_idx, playlist_id) => {

        try {
            const [result] = await db.query('UPDATE `TrackInPlaylist` SET idx = ? WHERE idx = ? AND playlist_id = ?', [new_idx, old_idx, playlist_id]); 
            if (result.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
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


            //let [res] = await db.query('SELECT * FROM `TrackInPlaylist`');
            //console.log(res);

            //const [r] = await db.query('SET FOREIGN_KEY_CHECKS=0');
            //console.log(r);
           

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

            //if(results.length) {
                //console.log("length in cnt func");
                //console.log(results.length);
                return results;
            //}
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
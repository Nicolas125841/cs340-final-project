var db = require('../db');

module.exports = {
    getArtist: async (artist_id) => {
        try {
            const [results] = await db.query('SELECT * FROM `Artist` WHERE `artist_id` = ?', [artist_id]);

            if(results.length === 1) {
                return results[0];
            }
        } catch(error) {
            console.error(error);
        }

        return undefined;
    },
    createArtist: async (name, producer) => {
        try {
            const [results] = await db.query('INSERT INTO `Artist` (`name`, `producer`) VALUES (?, ?)', [name, producer]);
            
            if(results.affectedRows === 1) {
                return results.insertId;
            }
        } catch (error) {
            console.error(error);
        }

        return 0;
    },
    updateArtist: async (newData, artist_id) => {
        try {
            const [results] = await db.query('UPDATE `Artist` SET ? WHERE `artist_id` = ?', [newData, artist_id]);
            
            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    },
    deleteArtist: async (artist_id) => {
        try {
            const [results] = await db.query('DELETE FROM `Artist` WHERE `artist_id` = ?', [artist_id]);

            if(results.affectedRows === 1) {
                return true;
            }
        } catch (error) {
            console.error(error);
        }

        return false;
    }
};
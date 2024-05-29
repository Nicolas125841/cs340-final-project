var db = require('../db');

module.exports = {
    userExists: async (username) => {
        try {
            const [results] = await db.query('SELECT * FROM `User` WHERE `username` = ?', [username]);

            if(results.length === 1) {
                return true;
            }
        } catch(error) {
            console.error(error);
        }

        return false;
    }
};
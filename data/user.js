var db = require('../db');

module.exports = {
    getUser: async (username) => {
        try {
            const [results] = await db.query('SELECT * FROM `User` WHERE `username` = ?', [username]);

            if(results.length === 1) {
                return results[0];
            }
        } catch(error) {
            console.error(error);
        }

        return undefined;
    },
    createUser: async (username, name) => {
        try {
            const [results] = await db.query('INSERT INTO `User` (`username`, `name`) VALUES (?, ?)', [username, name]);

            console.log(results);

            return true;
        } catch (error) {
            console.error(error);
        }

        return false;
    }
};
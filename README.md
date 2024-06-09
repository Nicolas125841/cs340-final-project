# CS 340 Final Project
## Setup Instructions

1. Unzip the source code and navigate to its **root** directory
2. Edit the `./env.sh` file with the appropriate parameters
```bash
    DEBUG=cs340-final-project:* #Reveals logs
    PORT=<port number> #Port number express will serve on
    DB_HOST='classmysql.engr.oregonstate.edu' #Database host server
    DB_UNAME='cs340_<onid>' #Account username for database
    DB_PWD='<password>' #Account password for database
    DB_DB='cs340_<onid>' #Name of database
    SESH_KEY='cs340 token' #Session secret, can be anything
```
3. Run `source env.sh` to set the environment variables (windows users mush export the variables manually instad)
4. Run `./load_db.sh` to configure the tables, initial contents, and triggers.
	- Note, if you don't have **mysql** installed this will not work. Instead, import/run the `./data/create_db.sql`, `./data/populate_db.sql`, and `./data/create_functions.sql` on **phpMyAdmin** in that order to prepare the tables
5. Run `npm install` to download the server dependencies
6. Run `npm start` to start the server
7. Once `cs340-final-project:server Listening on port <port>` appears in the terminal, the website is ready to access at `localhost:<port>/user/login`
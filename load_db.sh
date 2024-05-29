mysql $DB_DB --host=$DB_HOST --password=$DB_PWD --user=$DB_UNAME < ./data/create_db.sql
mysql $DB_DB --host=$DB_HOST --password=$DB_PWD --user=$DB_UNAME < ./data/populate_db.sql
handlebars ./views/partials/track_list.hbs -f ./public/javascripts/trackListTemplate.js
handlebars ./views/partials/track_cre.hbs -f ./public/javascripts/trackCreateTemplate.js
handlebars ./views/partials/track_del.hbs -f ./public/javascripts/trackDeleteTemplate.js
handlebars ./views/partials/artist_mod.hbs -f ./public/javascripts/artistModifyTemplate.js
handlebars ./views/partials/playlist_list.hbs -f ./public/javascripts/playlistListTemplate.js
handlebars ./views/partials/playlist_cre.hbs -f ./public/javascripts/playlistCreateTemplate.js
handlebars ./views/partials/playlist_del.hbs -f ./public/javascripts/playlistDeleteTemplate.js
handlebars ./views/partials/playlist_add.hbs -f ./public/javascripts/playlistAddTrackTemplate.js
handlebars ./views/partials/playlist_rem.hbs -f ./public/javascripts/playlistRemoveTrackTemplate.js
handlebars ./views/partials/user_mod.hbs -f ./public/javascripts/userModifyTemplate.js
npx tailwindcss -i ./src/input.css -o ./public/stylesheets/output.css

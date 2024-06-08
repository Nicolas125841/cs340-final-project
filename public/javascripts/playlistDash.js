(() => {
    let activitySection = document.getElementById('user-activity');
    let playlistAdd = document.getElementById('add-to-playlist');
    let playlistRemove = document.getElementById('remove-from-playlist');
    let playlist_id = document.querySelector('meta[name="playlist-id"]').content
  
     const showTracksToRemove = async () => {

        let response_1 = await fetch('/playlist/get_playlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_query: true, playlist_id: parseInt(playlist_id) })
        })
        let userPlaylists = await response_1.json();


        let response_2 = await fetch('/playlist/get_tracks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_query: true,  playlist_id: parseInt(playlist_id)})
          })
          let tracks = await response_2.json();

          console.log(tracks);

          console.log(Handlebars.templates)
      
          let listHtml_2 = Handlebars.templates['playlist_rem.hbs']( {tracks: tracks, playlists: userPlaylists} );
      
          activitySection.replaceChildren();
          activitySection.insertAdjacentHTML('beforeend',listHtml_2);
     } 
  
     const showTracksToAdd = async () => {
      
      let response_1 = await fetch('/playlist/get_playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_query: true, playlist_id: parseInt(playlist_id) })
      })
      let userPlaylists = await response_1.json();
  
      let response_2 = await fetch('/playlist/remaining_tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_query: true, playlist_id: parseInt(playlist_id) })
      })
      let tracks = await response_2.json();
  
      let listHtml_2 = Handlebars.templates['playlist_add.hbs']( {tracks: tracks, playlists: userPlaylists} );
  
      activitySection.replaceChildren();
      activitySection.insertAdjacentHTML('beforeend',listHtml_2);
  
     }
    
    playlistAdd.addEventListener('click', showTracksToAdd);
    playlistRemove.addEventListener('click', showTracksToRemove);
 
 
    //showTracks();
  })();
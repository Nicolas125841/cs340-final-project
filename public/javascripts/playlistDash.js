(() => {    
  let target = document.getElementById('playlist-add');
  let playlist_id = document.querySelector('meta[name="playlist-id"]').content;
  
  const showTracksToAdd = async () => {  
    let response = await fetch('/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    })

    let tracks = await response.json();
    let listHtml = Handlebars.templates['playlist_add.hbs']( { tracks: tracks, playlist_id: playlist_id } );

    target.replaceChildren();
    target.insertAdjacentHTML('beforeend',listHtml);
  }

  showTracksToAdd();
})();
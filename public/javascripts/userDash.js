(() => {
  let activitySection = document.getElementById('user-activity');
  let playlistTab = document.getElementById('playlist-button');
  let createTab = document.getElementById('create-button');
  let deleteTab = document.getElementById('delete-button');
  let modifyTab = document.getElementById('modify-button');

  const showList = async () => {
    let response = await fetch('/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_query: true })
    })
    let userPlaylists = await response.json();
    let listHtml = Handlebars.templates['playlist_list.hbs']({ playlists: userPlaylists });

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', listHtml);
  }; 

  playlistTab.addEventListener('click', showList);

  createTab.addEventListener('click', async () => {
    let createHtml = Handlebars.templates['playlist_cre.hbs']();

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', createHtml);
  });

  deleteTab.addEventListener('click', async () => {
    let response = await fetch('/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_query: true })
    })
    let userPlaylists = await response.json();
    let deleteHtml = Handlebars.templates['playlist_del.hbs']({ playlists: userPlaylists });

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', deleteHtml);
  });

  modifyTab.addEventListener('click', async () => {
    let deleteHtml = Handlebars.templates['user_mod.hbs']();

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', deleteHtml);
  });

  showList();
})();
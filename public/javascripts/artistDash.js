(() => {
  let activitySection = document.getElementById('artist-activity');
  let trackTab = document.getElementById('track-button');
  let createTab = document.getElementById('create-button');
  let deleteTab = document.getElementById('delete-button');
  let modifyTab = document.getElementById('modify-button');

  const showList = async () => {
    let response = await fetch('/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ artist_query: true })
    })
    let artistTracks = await response.json();
    let listHtml = Handlebars.templates['track_list.hbs']({ tracks: artistTracks });

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', listHtml);
  }; 

  trackTab.addEventListener('click', showList);

  createTab.addEventListener('click', async () => {
    let createHtml = Handlebars.templates['track_cre.hbs']();

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', createHtml);
  });

  deleteTab.addEventListener('click', async () => {
    let response = await fetch('/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ artist_query: true })
    })
    let artistTracks = await response.json();
    let deleteHtml = Handlebars.templates['track_del.hbs']({ tracks: artistTracks });

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', deleteHtml);
  });

  modifyTab.addEventListener('click', async () => {
    let deleteHtml = Handlebars.templates['artist_mod.hbs']();

    activitySection.replaceChildren();
    activitySection.insertAdjacentHTML('beforeend', deleteHtml);
  });

  showList();
})();
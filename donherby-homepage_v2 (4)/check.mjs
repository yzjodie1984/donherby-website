import https from 'https';

const getUrl = (id) => new Promise((resolve) => {
  https.get(`https://api.unsplash.com/photos/${id}?client_id=YOURID`, (res) => {
    // we don't have api key.
  })
});

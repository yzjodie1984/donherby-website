import https from 'https';
const queries = ['cargo ship', 'cargo plane', 'freight train', 'shipping containers', 'warehouse interior', 'customs border'];

queries.forEach(q => {
  https.get('https://unsplash.com/napi/search/photos?query=' + encodeURIComponent(q) + '&per_page=1', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const id = json.results[0].id;
        console.log(q + ': ' + id);
      } catch(e) {}
    });
  });
});

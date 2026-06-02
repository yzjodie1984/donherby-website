import https from 'https';

const getImages = (query) => new Promise(resolve => {
  https.get('https://api.pexels.com/v1/search?query=' + encodeURIComponent(query) + '&per_page=1', {
    headers: { 'Authorization': '563492ad6f917000010000018a38ae9a9c2c4d98a0c20a4be3594cd2' }
  }, res => {
    let str = '';
    res.on('data', d => str += d);
    res.on('end', () => {
      try {
        const url = JSON.parse(str).photos[0].src.medium;
        resolve(query + ': ' + url);
      } catch(e) { resolve(query + ': failed'); }
    });
  });
});

async function main() {
  console.log(await getImages('cargo ship'));
  console.log(await getImages('cargo airplane'));
  console.log(await getImages('freight train'));
  console.log(await getImages('shipping containers'));
  console.log(await getImages('warehouse interior'));
  console.log(await getImages('documents stamps'));
}
main();

const request = require('request');

const requestedBreed = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, (error, response, body) => {
  if (error) {
    return console.log(error);
  }

  const data = JSON.parse(body);

  if (!data.length) {
    return console.log('Sorry, no cat breeds by that name were found.');
  } else {
    console.log(data[0].description);
  }
});
const request = require('request');

const fetchBreed = (breed, dataHandler) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return dataHandler(error, null);
    }

    const data = JSON.parse(body);

    if (!data.length) {
      return dataHandler('Sorry, no cat breeds by that name were found.', null);
    } else {
      return dataHandler(null, data[0].description);
    }
  });
};

module.exports = fetchBreed;
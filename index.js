const breedFetcher = require('./breedFetcher');

const breedQuery = process.argv.slice(2)[0];

breedFetcher(breedQuery, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});
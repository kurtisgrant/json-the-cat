const assert = require('chai').assert;
const breedFetcher = require('../breedFetcher');

describe('#breedFetcher', () => {

  it('should return a description when passed a valid breed', (done) => {
    breedFetcher('Himalayan', (error, description) => {
      assert.deepEqual([error, description], [null, 'Calm and devoted, Himalayans make excellent companions, though they prefer a quieter home. They are playful in a sedate kind of way and enjoy having an assortment of toys. The Himalayan will stretch out next to you, sleep in your bed and even sit on your lap when she is in the mood.']);
      done();
    });
  });

  it('should return an error when passed a non-valid breed', (done) => {
    breedFetcher('Himawhoha', (error, description) => {
      assert.deepEqual([error, description], ['Sorry, no cat breeds by that name were found.', null]);
      done();
    });
  });

});
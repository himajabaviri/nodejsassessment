const expect = require('chai').expect;

const postData = require('../index').postData;

describe('post request', () => {
  it('post  for specified data ', () => {
    return postData('1')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        //expect 200 status code
        expect(response.status).to.equal(201);
        //expect userid
        expect(response.data.userId).to.equal(1);
      });
  });
});
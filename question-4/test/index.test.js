const expect = require('chai').expect;

const getPosts = require('../index').getPosts;

describe('Get Posts by postID', () => {
  it('Get a post by postID', () => {
    return getPosts('1')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        //expect 200 status code
        expect(response.status).to.equal(200);
        //expect userid
        expect(response.data.userId).to.equal(1);
      });
  });
});
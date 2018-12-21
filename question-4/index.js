const axios = require('axios');

module.exports = {
  getPosts(postID) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then(res => res)
      .catch(error => console.log(error));
  }
};
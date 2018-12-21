const axios = require('axios');

module.exports = {
  postData(postID) {
    return axios({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"post",
        data:{
          title: 'foo', 
          body: 'bar',
          userId: 1 
        }

      })
      .then(res => res)
      .catch(error => console.log(error));
  }
};
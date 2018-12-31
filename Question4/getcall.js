const request = require('request');
const expect = require('chai').expect;
var assert = require('assert');
try {
    var url = 'https://jsonplaceholder.typicode.com/posts/1',
        userVale = 1,
        statuscode = 200,
        userid = 1,
        options = {
            url: url,
            charset: 'utf-8',
            method: 'GET',
            headers: {
                "content-type": 'application/json'
            },
            body: url
        };
    var resp = request(options.url, function (error, response, body) {
        console.log('error: ', error);
        console.log('actualstatuscode: ', response.statusCode);
        console.log('body: ', body);
        assert.equal(statuscode, response.statusCode, 'Assertion Failed!!! Actual and Expected status codes donot match');
        var bodyValue = JSON.stringify(body.toString());
        var objectValue = JSON.parse(bodyValue);
        var userValue = objectValue['userId'];
        assert.equal(userid, userVale, 'Assertion Failed!!! Actual and Expected userids donot match');
    });
}catch(Exception){

}


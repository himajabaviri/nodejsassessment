const request = require('request');
const expect = require('chai').expect;
var assert = require('assert');
try {
    var url = 'https://jsonplaceholder.typicode.com/posts',
        body = { title: 'foo', body: 'bar', userId: 1 },
        userVale = 1,
        statuscode = 201,
        userid = 1;
    request({
        url: url,
        method: "POST",
        json: true,
        body: body
    }, function (error, response, body){
        console.log(response);
        console.log('error: ', error);
        console.log('status code: ', response && response.statusCode);
        console.log('body: ', body);
        assert.equal(statuscode,response.statusCode,'Assertion Failed!!! Actual and Expected status codes donot match');
        var bodyValue = JSON.stringify(body.toString());
        var objectValue = JSON.parse(bodyValue);
        var userValue =  objectValue['userId'];
        assert.equal(userid,userVale,'Assertion Failed!!! Actual and Expected userids donot match');
    });
}catch(Exception){

}


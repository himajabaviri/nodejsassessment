try {
    const defineSupportCode = require('cucumber').defineSupportCode;
    const locators = require('../support/locators');
    var fs = require("fs");
    var options={};
    const request = require('request');
    var statusCode;
    var userVal=1;
    var uri = "https://jsonplaceholder.typicode.com/posts";
    var body = { title: 'foo', body: 'bar', userId: 1 };
    var temp;

    defineSupportCode(function ({Given, When, Then}) {

        Given(/^user forms an end point for (.*) with (.*)$/, function (url,userid) {
            console.log('Given');
            console.log(url);

            options = {
                url: url,
                charset: 'utf-8',
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                json: true,
                body: body

            };
            console.log('encode URL'+encodeURI(url.toString()));

        });

        Then(/^user sends request and validates (.*) and (.*)$/, function(userid,statuscode){
            console.log('Then method');
            request({
                url: options.url,
                method: options.method,
                json: options.json,
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
                assert.equal(userid,userVal,'Assertion Failed!!! Actual and Expected userids donot match');
            });
        });
    });
} finally {

}


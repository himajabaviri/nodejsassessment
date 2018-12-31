try {
    const defineSupportCode = require('cucumber').defineSupportCode;
    var options={};
    const request = require('request');
    var statusCode;
    var temp;

    defineSupportCode(function ({Given, When, Then}) {

        Given(/^user forms an end point for (.*) with (.*)$/, function (url,userid) {
            temp = url +'/'+ userid;
            console.log('Temp value in given +++++++++++++++++++ '+temp);
        });

        Then(/^user sends request and validates (.*) and (.*)$/, function(userid,statuscode){
            var userVale = 1;
            var options = {
                url: temp,
                charset: 'utf-8',
                method: 'GET',
                headers: {
                    "content-type": 'application/json'
                },
                body: temp
            };
            var resp = request(options.url, function (error, response, body) {
                console.log('error: ', error);
                console.log('actualstatuscode: ', response.statusCode);
                console.log('body: ', body);
                assert.equal(statuscode,response.statusCode,'Assertion Failed!!! Actual and Expected status donot match');
                var bodyValue = JSON.stringify(body.toString());
                var objectValue = JSON.parse(bodyValue);
                var userValue =  objectValue['userId'];
                assert.equal(userid,userVale,'Assertion Failed!!! Actual and Expected userids donot match');
            });

        });

    });
} finally {

}


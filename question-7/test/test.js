var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var baseUrl=' https://jsonplaceholder.typicode.com';

describe("get method",function(){
    it('returns user with get',function(done){
        request.get({
            url:baseUrl+'/posts/1'
        },function(error,response,body){
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body).userId).to.equal(1);
            done();
        });
    });

});

describe("post method",function(){
    it('returns user with post',function(done){
        request.post({
            url:baseUrl+'/posts',
            body:JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
            headers:{"Content-type": "application/json; charset=UTF-8"},
        },function(error,response,body){
            expect(response.statusCode).to.equal(201);
            console.log(JSON.parse(body))
            expect(JSON.parse(body).id).to.equal(101);
            done();
        });
    });

});
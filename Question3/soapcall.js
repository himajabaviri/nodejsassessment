const request = require('request');
var assert = require('assert');
try {
    var code;
    console.log('Making a soap call');
    var text = "<?xml version='1.0'?> <soap:Envelope  xmlns:soap='http://www.w3.org/2003/05/soap-envelope/'soap:encodingStyle='http://www.w3.org/2003/05/soap-encoding'><soap:Body xmlns:m='http://www.example.org/stock'><m:GetStockPrice><m:StockName>IBM</m:StockName></m:GetStockPrice></soap:Body></soap:Envelope>"
    var soapOptions = {
        url: 'http://www.example.org/InStock',
        headers: {
            'Content-Type': 'application/soap+xml; charset=utf-8',
            'Content-Length': text.length.toString(),
            'Host': 'www.example.org'
        },
        method: 'POST',
        body: text
    }
    request(soapOptions, function(error, response, body) {
        console.log(response);
        console.log('error: ', error);
        console.log('status code: ', response && response.statusCode);
        console.log('body: ', body);
    })
}catch(Exception){

}


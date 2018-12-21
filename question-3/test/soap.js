var request = require('request');
let xml =
`<?xml version="1.0"?>
<soap:Envelopexmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
<soap:Body xmlns:m="http://www.example.org/stock">
  <m:GetStockPrice>
    <m:StockName>IBM</m:StockName>
  </m:GetStockPrice>
</soap:Body>
</soap:Envelope>
`

var options = {
  url: 'http://www.example.org/stock/InStock',
  method: 'POST',
  body: xml,
  headers: {
    'Content-Type':'application/soap+xml; charset=utf-8',
    'Content-Length':xml.length,
  }
};

let callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    console.log('Raw result', body);
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser({explicitArray: false, trim: true});
    parser.parseString(body, (err, result) => {
      console.log('JSON result', result);
    });
  };
  console.log('E', response.statusCode, response.statusMessage);  
};
request(options, callback);
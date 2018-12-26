var fs = require('fs'),
    xml2js = require('xml2js')
    parseString = require('xml2js').parseString;
   fs.readFile('sample.xml','utf-8',function(err,data){
    if (err) console.log("Error while reading xml file === "+err);
        console.log(data);
        parseString(data, function(err, result){
            if (err) console.log("Error while parsing xml file === "+err);
            console.log(result); 
            var parsedXml = result;
            parsedXml.employees.employee[0].empid = "98345";
            var builder = new xml2js.Builder();
            var backToxml = builder.buildObject(parsedXml);
            var now = new Date();
            fs.writeFile('edited-sample'+now.getMilliseconds()+'.xml', backToxml, function(err, data){
                if (err) console.log("Error while writing xml into a file === "+err);
                console.log("successfully written our update xml to file");
            })
    
        });
   });

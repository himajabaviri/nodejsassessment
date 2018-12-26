var fs = require('fs'),
    xml2js = require('xml2js');
var obj;
fs.readFile('sample_json.json', 'utf-8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.dir(obj);
  obj.items[2].id.videoId = "IrvingItQuVs";
  var builder = new xml2js.Builder();
  var xmlFromat = builder.buildObject(obj);
  var now = new Date();
  fs.writeFile('edited-samplejson'+now.getMilliseconds()+'.xml', xmlFromat, function(err, data){
      if (err) console.log("Error while writing xml into a file === "+err);
      console.log("successfully written our update xml to file");
  })
});
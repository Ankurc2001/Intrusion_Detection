const aws = require('aws-sdk');

var s3params = {
  Bucket: "facetargetaws",
};

const s3 = new aws.S3();
const allitems = (params,callback)=>{
  s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else{
      callback( data.Contents.map(data=> data.Key))
    }
 });
}

module.exports = { 
  s3params ,
  allitems
}
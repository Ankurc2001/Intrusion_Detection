const AWS = require('aws-sdk');
const uuid = require('node-uuid');

AWS.config.update({region:'ap-south-1'});

const{ allitems , s3params }=require('./s3');

// Create an Rekognition Client
var rekognition = new AWS.Rekognition();

allitems(s3params,(data) =>{
  data.forEach(element => {
    
  var params = {
    SourceImage: { 
      S3Object: {
        Bucket: 'faceinputaws',
        Name: 'WhatsApp Image 2020-10-09 at 1.51.37 PM.jpeg'
      }
    },
    TargetImage: { 
      S3Object: {
        Bucket: 'facetargetaws',
        Name: `${element}`
      }
    },
    QualityFilter: "AUTO",
    SimilarityThreshold: 60
  };

  rekognition.compareFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data.FaceMatches.length); 
                
  });
  
    
  });
})




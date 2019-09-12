// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set region
// AWS.config.update({ region: 'us-east-2' });

// // Create publish parameters
// var params = {
//   Message: 'MESSAGE_TEXT', /* required */
//   TopicArn: 'TOPIC_ARN'
// };

// // Create promise and SNS service object
// var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

// // Handle promise's fulfilled/rejected states
// publishTextPromise.then(
//   function (data) {
//     console.log("Message ${params.Message} send sent to the topic ${params.TopicArn}");
//     console.log("MessageID is " + data.MessageId);
//   }).catch(
//     function (err) {
//       console.error(err, err.stack);
//     });

var AWS = require("aws-sdk");

// Set region
AWS.config.update({ region: 'us-east-2' });

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    console.log("Region:", AWS.config.region);
  }
});
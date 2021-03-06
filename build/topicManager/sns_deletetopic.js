'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create promise and SNS service object
var deleteTopicPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).deleteTopic({ TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC' }).promise();

// Handle promise's fulfilled/rejected states
deleteTopicPromise.then(function (data) {
  return console.log("Topic Deleted", data);
}).catch(function (err) {
  return console.error(err, err.stack);
});
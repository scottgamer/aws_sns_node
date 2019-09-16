'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create setTopicAttributes parameters
var params = {
  AttributeName: 'DisplayName', /* required */
  TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC', /* required */
  AttributeValue: 'NODE_TOPIC_CHANGED'
};

// Create promise and SNS service object
var setTopicAttribsPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).setTopicAttributes(params).promise();

// Handle promise's fulfilled/rejected states
setTopicAttribsPromise.then(function (data) {
  return console.log(data);
}).catch(function (err) {
  return console.error(err, err.stack);
});
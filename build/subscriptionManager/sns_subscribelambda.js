'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'REGION' });

// Create subscribe/email parameters
var params = {
  Protocol: 'lambda', /* required */
  TopicArn: 'TOPIC_ARN', /* required */
  Endpoint: 'LAMBDA_FUNCTION_ARN'
};

// Create promise and SNS service object
var subscribePromise = new AWS.SNS({ apiVersion: '2010-03-31' }).subscribe(params).promise();

// Handle promise's fulfilled/rejected states
subscribePromise.then(function (data) {
  return console.log("Subscription ARN is " + data.SubscriptionArn);
}).catch(function (err) {
  return console.error(err, err.stack);
});
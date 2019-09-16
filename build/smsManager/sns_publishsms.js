'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create publish parameters
var params = {
  Message: 'NO JOKING', /* required */
  PhoneNumber: '+593987079325'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(function (data) {
  return console.log("MessageID is " + data.MessageId);
}).catch(function (err) {
  return console.error(err, err.stack);
});
'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create promise and SNS service object
var phonelistPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).listPhoneNumbersOptedOut({}).promise();

// Handle promise's fulfilled/rejected states
phonelistPromise.then(function (data) {
  return console.log(data);
}).catch(function (err) {
  return console.error(err, err.stack);
});
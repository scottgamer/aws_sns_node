'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create SMS Attribute parameter you want to get
var params = {
  attributes: ['DefaultSMSType']
};

// Create promise and SNS service object
var getSMSTypePromise = new AWS.SNS({ apiVersion: '2010-03-31' }).getSMSAttributes(params).promise();

// Handle promise's fulfilled/rejected states
getSMSTypePromise.then(function (data) {
  return console.log(data);
}).catch(function (err) {
  return console.error(err, err.stack);
});
'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create promise and SNS service object
var phonenumPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).checkIfPhoneNumberIsOptedOut({ phoneNumber: '+593987079325' }).promise();

// Handle promise's fulfilled/rejected states
phonenumPromise.then(function (data) {
  return console.log("Phone Opt Out is " + data.isOptedOut);
}).catch(function (err) {
  return console.error(err, err.stack);
});
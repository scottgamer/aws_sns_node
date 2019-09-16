// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create promise and SNS service object
const phonenumPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .checkIfPhoneNumberIsOptedOut({ phoneNumber: '+593987079325' })
  .promise();

// Handle promise's fulfilled/rejected states
phonenumPromise
  .then(data =>
    console.log("Phone Opt Out is " + data.isOptedOut))
  .catch(err =>
    console.error(err, err.stack));
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create promise and SNS service object
const phonelistPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .listPhoneNumbersOptedOut({})
  .promise();

// Handle promise's fulfilled/rejected states
phonelistPromise
  .then(data =>
    console.log(data)
  )
  .catch(err =>
    console.error(err, err.stack)
  );
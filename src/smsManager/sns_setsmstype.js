// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create SMS Attribute parameters
const params = {
  attributes: { /* required */
    // 'DefaultSMSType': 'Transactional', /* highest reliability */
    'DefaultSMSType': 'Promotional' /* lowest cost */
  }
};

// Create promise and SNS service object
const setSMSTypePromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .setSMSAttributes(params)
  .promise();

// Handle promise's fulfilled/rejected states
setSMSTypePromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack));
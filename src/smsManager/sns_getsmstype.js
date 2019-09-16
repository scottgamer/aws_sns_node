// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create SMS Attribute parameter you want to get
const params = {
  attributes: [
    'DefaultSMSType', 
    /* Attribute name */
    /* more items */
  ]
};

// Create promise and SNS service object
const getSMSTypePromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .getSMSAttributes(params)
  .promise();

// Handle promise's fulfilled/rejected states
getSMSTypePromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack));
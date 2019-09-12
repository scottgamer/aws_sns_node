// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create promise and SNS service object
const listTopicsPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .listTopics({})
  .promise();

// Handle promise's fulfilled/rejected states
listTopicsPromise
  .then(data =>
    console.log(data.Topics))
  .catch(err =>
    console.error(err, err.stack));
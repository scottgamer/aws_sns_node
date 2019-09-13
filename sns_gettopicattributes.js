// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create promise and SNS service object
const getTopicAttribsPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .getTopicAttributes({ TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC' })
  .promise();

// Handle promise's fulfilled/rejected states
getTopicAttribsPromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack));
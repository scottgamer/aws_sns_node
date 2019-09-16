// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create promise and SNS service object
const subslistPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .listSubscriptionsByTopic({ TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC' })
  .promise();

// Handle promise's fulfilled/rejected states
subslistPromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack)
  );
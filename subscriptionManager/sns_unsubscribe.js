// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'REGION' });

// Create promise and SNS service object
const subscribePromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .unsubscribe({ SubscriptionArn: "TOPIC_SUBSCRIPTION_ARN" })
  .promise();

// Handle promise's fulfilled/rejected states
subscribePromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack));
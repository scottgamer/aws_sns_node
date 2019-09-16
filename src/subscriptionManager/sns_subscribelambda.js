// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'REGION' });

// Create subscribe/email parameters
const params = {
  Protocol: 'lambda', /* required */
  TopicArn: 'TOPIC_ARN', /* required */
  Endpoint: 'LAMBDA_FUNCTION_ARN'
};

// Create promise and SNS service object
const subscribePromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .subscribe(params)
  .promise();

// Handle promise's fulfilled/rejected states
subscribePromise
  .then(data =>
    console.log("Subscription ARN is " + data.SubscriptionArn))
  .catch(err =>
    console.error(err, err.stack));
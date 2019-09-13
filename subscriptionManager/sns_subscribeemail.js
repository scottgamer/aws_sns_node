// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create subscribe/email parameters
const params = {
  Protocol: 'EMAIL', /* required */
  TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC', /* required */
  Endpoint: 'richosojason@msn.com'
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
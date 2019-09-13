// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create publish parameters
const params = {
  Message: 'Third notification', /* required */
  TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC'
};

// Create promise and SNS service object
const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .publish(params)
  .promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
  .then(data => {
    console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  })
  .catch(err =>
    console.error(err, err.stack));
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create setTopicAttributes parameters
const params = {
  AttributeName: 'DisplayName', /* required */
  TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC', /* required */
  AttributeValue: 'NODE_TOPIC_CHANGED'
};

// Create promise and SNS service object
const setTopicAttribsPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .setTopicAttributes(params)
  .promise();

// Handle promise's fulfilled/rejected states
setTopicAttribsPromise
  .then(data =>
    console.log(data))
  .catch(err =>
    console.error(err, err.stack));
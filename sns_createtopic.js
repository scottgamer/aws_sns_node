// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-2' });

// Create promise and SNS service object
const createTopicPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .createTopic({ Name: "NODE_TOPIC" })
  .promise();

// Handle promise's fulfilled/rejected states
createTopicPromise
  .then(data =>
    console.log("Topic ARN is " + data.TopicArn)
  )
  .catch(err =>
    console.error(err, err.stack)
  );
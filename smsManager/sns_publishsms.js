// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create publish parameters
const params = {
  Message: `NO JOKING`, /* required */
  PhoneNumber: '+593987079325',
};

// Create promise and SNS service object
const publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
  .publish(params)
  .promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
  .then(data =>
    console.log("MessageID is " + data.MessageId))
  .catch(err =>
    console.error(err, err.stack));
"use strict";
const pulumi = require("@pulumi/pulumi");

const config = new pulumi.Config("aws")
const env = pulumi.getStack();

const sqs = require("./scripts/sqs.js")(env, config)

module.exports = {
    sqs
}


// Create an AWS resource (S3 Bucket)
//const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
//exports.bucketName = bucket.id;

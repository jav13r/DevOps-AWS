"use strict"
const aws = require("@pulumi/aws");

module.exports = function (env, config) {
    const aws_sqs_testing = new aws.sqs.Queue(`${env}-aws-sqs-testing`, {
        name: `${env}-aws-sqs-testing`,
        delaySeconds: 0,
        messageRetentionSeconds: 345600,
        visibilityTimeoutSeconds: 120,
        tags: {
            Environment: env,
        },
    });

    return {
        aws_sqs_testing_arn: aws_sqs_testing.arn,
        aws_sqs_testing_name: aws_sqs_testing.name,
    }
}
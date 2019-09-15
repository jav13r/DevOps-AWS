"use strict"
const aws = require("@pulumi/aws");

module.exports = function (env, config) {
    const aws_dynamo_testing = new aws.dynamodb.Table(`${env}-dynamo-aws-testing`, {
        name: `${env}-dynamo-aws-testing`,
        attributes: [
            { name: "Id", type: "S" },
        ],
        hashKey: "Id",
        readCapacity: 1,
        writeCapacity: 1,
    });

    return {
        aws_dynamo_testing_arn: aws_dynamo_testing.arn,
        aws_dynamo_testing_name: aws_dynamo_testing.name,
    }
}
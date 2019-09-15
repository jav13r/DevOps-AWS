"use strict";
const pulumi = require("@pulumi/pulumi");

const config = new pulumi.Config("aws")
const env = pulumi.getStack();

const sqs = require("./scripts/sqs.js")(env, config)
const dynamo = require("./scripts/dynamo.js")(env, config)

module.exports = {
    sqs,
    dynamo,
}

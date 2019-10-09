"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const config_1 = require("./config/config");
const config_2 = require("./config/config");
let configurationObj;
if (config_2.environment === "PROD") {
    configurationObj = config_1.config.aws.prod;
}
else {
    configurationObj = config_1.config.aws.dev;
}
console.log(`aws_profile- ${configurationObj.aws_profile}, aws_region - ${configurationObj.aws_reigion}`);
//Configure AWS
if (configurationObj.aws_profile !== "DEPLOYED") {
    var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
    AWS.config.credentials = credentials;
}
exports.s3 = new AWS.S3({
    signatureVersion: 'v4',
    region: configurationObj.aws_reigion,
    params: { Bucket: configurationObj.aws_media_bucket }
});
/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
function getGetSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    const url = exports.s3.getSignedUrl('getObject', {
        Bucket: configurationObj.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    });
    return url;
}
exports.getGetSignedUrl = getGetSignedUrl;
/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
function getPutSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    const url = exports.s3.getSignedUrl('putObject', {
        Bucket: configurationObj.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
    });
    return url;
}
exports.getPutSignedUrl = getPutSignedUrl;
//# sourceMappingURL=aws.js.map
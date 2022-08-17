# aws-labs-serverless-html-form
## Step 1
### Provision stack using Cloudformation template. The following resources will be provisioned.
- S3 Bucket Website Hosting
- Cloudfront Distribution
- Cloudfront Function
- Lambda Function
- Lambda Execution IAM Role
- REST API Gateway
- DynomoDB Table


## Step 2
### Edit ./html/js/api.js
 - Grab API Gateway Invoke URL from Cloudformation Output and paste it into ./html/js/api.js


## Step 3
### Go to AWS Console -> Amazon SES
 - Create identity and verify both Sender Address & Recipient Address you entered when deploying Cloudformation Stack in Step 1
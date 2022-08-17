# aws-labs-serverless-html-form
## Step 1
### Provision stack using CloudFormation template. The following resources will be provisioned.
- S3 Bucket Website Hosting
- CloudFront Distribution
- CloudFront Function
- Lambda Function
- Lambda Execution IAM Role
- REST API Gateway
- DynomoDB Table


## Step 2
### Edit ./html/js/api.js
- Copy API Gateway Invoke URL from CloudFormation Output tab and paste it into ./html/js/api.js


## Step 3
### Copy frontend html file to S3 Bucket
- Go to S3 Bucket using CloudFormation Resources tab
- Copy following files in html folder to S3 bucket.
-- index.html
-- js/api.js
-- css/style.css

## Step 4
### Go to AWS Console -> Amazon SES
- Create identity and verify both Sender Address & Recipient Address you entered when deploying CloudFormation Stack in Step 1
import json

def lambda_handler(event, context):
    # TODO implement
    print(event['name'])
    print(event['email'])
    print(event['comments'])
    return {
        'statusCode': 200,
        'body': json.dumps('Woohoo!!')
    }

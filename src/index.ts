import Twitter = require("twitter");

export async function handler (event: any, context: AWSLambda.Context) {

    let client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    });

    client.get('statuses/user_timeline', {}, (error, tweets, response) => {

    });

    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
}

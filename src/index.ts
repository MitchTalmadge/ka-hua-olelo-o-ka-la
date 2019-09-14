export function handler (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
}

export async function handler (event: any, context: AWSLambda.Context) {
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
}

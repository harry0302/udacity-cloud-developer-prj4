// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'almu0aqfm4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-uqpv236a.us.auth0.com',            // Auth0 domain
  clientId: 'LiiM3Zdn7Wyu0UfpK969Cyfs71ik1xsm',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

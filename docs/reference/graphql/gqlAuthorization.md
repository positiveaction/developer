---
id: gqlAuthorization
title: Authorization tokens
---

Positive Action provides token service for api customers. When you request a token, the service returns a unique access token in exchange for the client_id and secret_id for a Positive Action API account.

Positive Action GraphQL provides a mutation that returns a token on behalf of a logged-in customer. Use this token in the Authorization request header field for any queries and mutations. See [Request headers](gqlRequests)

## Credentials

Before your application can access private data using Positive Action API, you must obtain credentials that grant access to the API.
Visit **[API Keys](https://positiveaction.net/api-admin/keys)** to obtain Positive Action credentials
such as a `Client ID` and `Secret ID` that are known to both Positive Action and your application.

* To generate a new API Key, click **Create new key**.
![img](/img/graphql/api-key-btn.png)
* A popup will appear to set a `Name` to reference the API Key.
![img](/img/graphql/api-key-name.png)
* On the next step you will have the credentials for the API Key such as `Name`, `Client ID` and `Secret ID`.
`Secret ID` will only be shown while the popup is active for security reasons.
This is the only opportunity to record it, copy this key to clipboard and store it somewhere safe.
`Name` and `Client ID` will still be available after the popup is closed.
![img](/img/graphql/api-key-popup.png)

:::caution Remember
`Secret ID` will be displayed only once! 
After you close the pop where it's listed, there is no way to display the value again. 
 Please copy and store your `Secret ID` in a safe place!
:::

## API Client tokens

The [`login`](gqlMutations#login) mutation requires the `Client ID` and `Secret ID` in the payload, as shown in the following example:

**Request:**
````graphql
mutation {
  login(loginInput: {
    clientId: "760ex193-25xd-47b5-96fd-79537xxxxxxx"
    secretId: "a8857dcd-0d52-4111-bfdb-ce73e7c124b3"
  })
  {
    accessToken
  }
}
````

**Response:**
````json
{
  "data": {
    "login": {
      "accessToken": "xyJhbGciOiJIUzI2XiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOi"
    }
  }
}
````

You can now use this token in the Authorization request header field for all queries and [`login`](gqlMutations) mutation.



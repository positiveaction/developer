---
id: gqlRequests
title: GraphQL requests
---

Positive Action GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. Mutations must be POST requests.

## Request headers
Positive Action accepts the following headers in a GraphQL request:

Header name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <authorization_token>` | A customer token. [Authorization tokens](gqlAuthorization) describes how to generate tokens.


### Specify request headers in a GraphQL browser

GraphQL Playground example:
![img](/img/graphql/graphql-playground-request.png)

GraphiQL example:
![img](/img/graphql/graphiql-request.png)


## Responses

GraphQL responses are in JSON. Every response is a JSON map and will include JSON keys for "data", "errors", or "extensions" following the GraphQL specification.

Successful queries are in the following format:
````json
{
  "data": { ... },
  "extensions": { ... }
 }
````

Queries that have errors are in the following format:
````json
{
   "errors": [ ... ],
  }
````
---
id: apiGateway
title: Playground
---
In order to make a request in GraphQL Playground you will have to:

 1. Create account in case you don't have
 2. Login to get the token
 3. Use the token in order to make the request

### Create account

Open `api-auth GraphQL Playground` in your browser (`http://<your_ip>:3038/graphql`) and do the following request:
```graphql
mutation{ 
	createClient( NewClientInput:{userId: 1, name: "<NAME>", scope: "" }) {
		name
		userId
		clientId
		scope
		secretId
	}
}
```

The response should look something like this:
```json
{

"data": {
	"createClient": {
		"name": "<NAME>",
		"userId": 1,
		"clientId": "<CLIENT_ID>",
		"scope": "",
		"secretId": "<SECRET_ID>"
		}
	}
}
```

### Login
 Login is done in the same Playground (*api-auth*) with the following request:
 ```graphql
 mutation{
login(loginInput:{secretId: "<SECRET_ID>",clientId: "<CLIENT_ID>"}) {
accessToken

}
 ```
 Where `<SECRET_ID>` ad `<CLIENT_ID>` are the values we got from `createClient` request.

The response should look like:
```json
{
  "data": {
    "login": {
      "accessToken": "<ACCESS_TOKEN>"
    }
  }
}
```
The `<ACCESS_TOKEN>` will be used in every request by `api-gateway`.  Every time the token expire you will have to generate a new `Login` to replace your header request with the new token.

### Making the request in Playground

Open `api-gateway GraphQL Playground` in your browser (`http://<your_ip>:8086/graphql`) and for each request add the `authorization` parameter inside `HTTP HEADERS`:
```json
{
  "authorization":"Bearer <ACCESS_TOKEN>"
}
```

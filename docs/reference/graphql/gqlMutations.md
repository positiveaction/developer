---
id: gqlMutations
title: Mutations
---



## Login
**Request:**
````graphql
mutation {
  login(loginInput: {
    secretId: "8ef81xx6-dx1a-7409-9eaf-e114420xxxx4"
    clientId: "e8fx5cx2-3x58-4baf-9457-1d0760fxxxxc"
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
      "accessToken": "xyJhbGciOiJIUzI2XiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBZGlUZXN0Iiwic2NvcGUiOiIxNiIsImNsaWVudElkIjoiZThmYjVjYjItM2M4OC00YmFkLTk0NDctMWQwNzYwZjNkZDNjIiwiaWF0IjoxNjEyNDUzMDQ0LCJleHAiOjE2MTI0ODE4NDR9.P2NZw0-q9C6YGiDh1cp9nX85xOzCEeJYi4Dp2_xXF1g"
    }
  }
}
````

**Error:**
````json
{
   "error": {
     "errors": [
       {
         "message": "Context creation failed: Missing authorization",
         "extensions": {
           "code": "INTERNAL_SERVER_ERROR",
           "exception": {
             "slacktrace": [...]
           }
         }
       }
     ]
   }
 }
````
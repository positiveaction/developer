---
id: gqlQueries
title: Queries
---

## Product
```graphql
query {
  product(
    id: 10
  )
  {
    id
    name
    resources {
      totalCount
      edges {
        node {
          id
          unitId
          sectionId
          timeToPrepare
          timeToTeach
          sortNo
          attributes {
            edges {
              node {
                title
                description
                value
              }
            }
          }
          tags {
            edges {
              node {
                label
              }
            }
          }
        }
      }
    }
  }
}
```
Output:

````json
{
   "data": {
     "product": {
       "id": 10,
       "name": "Grade 8",
       "resources": {
         "totalCount": 124,
         "edges": [
           {
             "node": {
               "id": 1371,
               "unitId": 11,
               "sectionId": 1,
               "timeToPrepare": 5,
               "timeToTeach": 30,
               "sortNo": 84,
               "attributes": {
                 "edges": [
                   {
                     "node": {
                       "title": "Thomas Edison and Grit",
                       "description": "Perseverance, or grit, is something that Thomas Edison had a tremendous amount of because he was such a successful inventor. His inventions have made our lives so much easier! In this video students will learn more about the life of Edison and his amazing grit.",
                       "value": "https://www.flocabulary.com/unit/thomas-edison/"
                     }
                   },
                   {
                     "node": {
                       "title": "Be Kind to Yourself",
                       "description": "Sitting and breathing exercise from Empower Tools. How nice are you to yourself?",
                       "value": "https://app.gonoodle.com/activities/be-kind-to-yourself?sp=category&sn=Boost%20Confidence&st=categories&sid=19"
                     }
                   },
                   {
                     "node": {
                       "title": "",
                       "description": "",
                       "value": "https://docs.positiveaction.net/music//contemporary/positive-action-theme-song-i-am-a-positive-action-kid-contemporary.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=OH3TQNPENPS5EV135LW3%2F20210203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210203T150649Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b4c277dbd2396870d0147f6af21fe8e74dd780a657e0e7f32a2a2327ab81c542"
                     }
                   },
                   {
                     "node": {
                       "title": "",
                       "description": "",
                       "value": "https://soundcloud.com/marcia-morgan-968113233/engine-of-change?in=marcia-morgan-968113233/sets/road-map"
                     }
                   },
                   {
                     "node": {
                       "title": "Secret Agent 23 Skidoo",
                       "description": "",
                       "value": "Gotta Be Me"
                     }
                   }
                 ]
               },
               "tags": {
                 "edges": [
                   {
                     "node": {
                       "label": "Friendship"
                     }
                   },
                   {
                     "node": {
                       "label": "Goal Setting"
                     }
                   },
                   {
                     "node": {
                       "label": "Growth Mindset"
                     }
                   },
                   {
                     "node": {
                       "label": "Empathy"
                     }
                   }
                 ]
               }
             }
           }
         ]
       }
     }
   }
 }
````

## Products
````graphql
query {
  products(
    paging: {
      limit: 1
    }
  ){
    id
    name
    resources(filter: 
    {
      unitId: {
        eq: 3
      }
    },
      sorting: {
        field: sortNo,
        direction:  ASC,
      }
    ) {
      edges {
        node {
          unitId
          id
          sortNo
          
        }
      }
    }
  }
}
````

Output:
````json
{
  "data": {
    "products": [
      {
        "id": 10,
        "name": "Grade 8",
        "resources": {
          "edges": []
        }
      }
    ]
  }
}
````

## Resource

## Resources

## Attribute

## Attributes

## Resource Sort Section

## Unit

## Units

## Tags


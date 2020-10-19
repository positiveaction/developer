---
id: text
title: Text Components
---

## Textnode

```js
{
   "type": "textnode",
   "content": "Lorem ipsum dolor sit amet",
}
```

## Text

### Text with bold

![img](../../static/img/components/text-with-bold.png)

```js

   {
      "type":"text",
      "classes":[
         {
            "name":"pa-generated-class-in97",
            "type":1,
            "label":"pa-generated-class-in97",
         }
      ],
      "content":"",
      "attributes":{
         "id":"in97",
      },
      "components":[
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-iu8c",
                  "type":1,
                  "label":"pa-generated-class-iu8c",
               }
            ],
            "content":"Lorem ",
            "tagName":"",            
         },
         {
            "type":"text",
            "classes":[
               {
                  "name":"pa-generated-class-ise3",
                  "type":1,
                  "label":"pa-generated-class-ise3",
               }
            ],
            "content":"Ipsum",
            "tagName":"b",            
         },
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-izel",
                  "type":1,
                  "label":"pa-generated-class-izel",
               }
            ],
            "content":" is simply dummy text ",
            "tagName":"",            
         }
      ],
   }

```


### Text with other decorations

![img](../../static/img/components/text.png)


```js

   {
      "type":"text",
      "classes":[
         {
            "name":"pa-generated-class-ixjv",
            "type":1,
            "label":"pa-generated-class-ixjv",            
         }
      ],
      "content":"",
      "attributes":{
         "id":"ixjv"
      },
      "components":[
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-iecn",
                  "type":1,
                  "label":"pa-generated-class-iecn",                  
               }
            ],
            "content":"Lorem ",
            "tagName":"",                        
         },
         {
            "type":"text",
            "classes":[
               {
                  "name":"pa-generated-class-i8d7",
                  "type":1,
                  "label":"pa-generated-class-i8d7",
               }
            ],
            "content":"Ipsum",
            "tagName":"b",            
         },
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-ib1z",
                  "type":1,
                  "label":"pa-generated-class-ib1z",
               }
            ],
            "content":" is simply ",
            "tagName":"",
         },
         {
            "type":"text",
            "classes":[
               {
                  "name":"pa-generated-class-iiav",
                  "type":1,
                  "label":"pa-generated-class-iiav",
               }
            ],
            "content":"dummy",
            "tagName":"i",
         },
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-i8gy",
                  "type":1,
                  "label":"pa-generated-class-i8gy",
               }
            ],
            "content":" text of ",
            "tagName":"",
            "highlightable":0
         },
         {
            "type":"text",
            "classes":[
               {
                  "name":"pa-generated-class-i5ai",
                  "type":1,
                  "label":"pa-generated-class-i5ai",
               }
            ],
            "content":"the",
            "tagName":"u",
         },
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-itog",
                  "type":1,
                  "label":"pa-generated-class-itog",
               }
            ],
            "content":" printing and ",
            "tagName":"",
         },
         {
            "type":"text",
            "classes":[
               {
                  "name":"pa-generated-class-ifwwe",
                  "type":1,
                  "label":"pa-generated-class-ifwwe",
               }
            ],
            "content":"typesetting",
            "tagName":"s",
         },
         {
            "type":"textnode",
            "classes":[
               {
                  "name":"pa-generated-class-izsq9",
                  "type":1,
                  "label":"pa-generated-class-izsq9",
               }
            ],
            "content":" industry.",
            "tagName":"",
         }
      ],
   }

```

### Decoration wrapper

![img](../../static/img/components/text.png)


```js
{
   "type":"text",
   "classes":[
      {
         "name":"pa-generated-class-i18b",
         "type":1,
         "label":"pa-generated-class-i18b"
      }
   ],
   "content":"",
   "attributes":{
      "id":"i18b"
   },
   "components":[
      {
         "type":"textnode",
         "classes":[
            {
               "name":"pa-generated-class-itny",
               "type":1,
               "label":"pa-generated-class-itny"
            }
         ],
         "content":"Lorem Ipsum is simply ",
         "tagName":""
      },
      {
         "type":"text",
         "classes":[
            {
               "name":"pa-generated-class-iu4f",
               "type":1,
               "label":"pa-generated-class-iu4f"
            }
         ],
         "content":"",
         "tagName":"b",
         "components":[
            {
               "type":"text",
               "classes":[
                  {
                     "name":"pa-generated-class-i2ud",
                     "type":1,
                     "label":"pa-generated-class-i2ud"
                  }
               ],
               "content":"dummy",
               "tagName":"i"
            }
         ]
      },
      {
         "type":"textnode",
         "classes":[
            {
               "name":"pa-generated-class-ij88",
               "type":1,
               "label":"pa-generated-class-ij88"
            }
         ],
         "content":" text ",
         "tagName":""
      }
   ]
}
```

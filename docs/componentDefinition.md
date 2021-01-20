---
id: componentDefinition
title: Component Definition
sidebar_label: Component Definition
slug: /
---
## Define Components - REMOVE THIS EDIT TEST
A Component is an object containing information about how the element is rendered in the canvas (managed in the View) and how it might look its final code (created by the properties in the Model). Generally, all Model properties are reflected in the View. 
We have a list of [components type](componentsType#components-type) 

The Component is a base element of the template. It might be something simple and atomic like an image or a text box, but also complex structures, more probably composed by other components, like sections or pages.

This is what a component looks like

```js
{
 "type": "text",
 "content": "",
 "tagName":"",
 "attributes": {
   "id": "i8cs"
 },
 "components": [
   {
     "type": "textnode",
     "content": "Lorem ipsum dolor sit amet",     
   }
 ],
}
```
The real **Component Definition** would be a little bit bigger so so we'd reduced the JSON for the sake of simplicity.

---

## Basic Attributes



### type
String attribute **type** define the component type, we have a list with all supported components. We have a list of [components type](componentsType#components-type) 

### content
Content of the component, for example for a simple textnode, atomic component, it is a string 
### attributes
An object of attributes. Each component can have specific attributes, for example: id, font-size, align, etc.

### tagName
String attribute HTML tag of the component, eg. `span`. Default: `div` 

### components
Array of objects, a component can have one or multiple components as children's. 


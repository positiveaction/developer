---
id: generateTypes
title: Generating TypeScript typings 
---
  
### Installing dependencies
We need to make sure that the basic GraphQL package is within our dependencies, since GraphQL Code Generator depends on it:

```sh
yarn add graphql
```
Then we can install GraphQL Code Generator: 
```
yarn add -D @graphql-codegen/cli
```
Install the following plugins:
```
yarn add -D @graphql-codegen/typescript
```
This plugin generates the base TypeScript types, based on your GraphQL schema.
```
yarn add -D @graphql-codegen/typescript-operations
```
This plugin generates TypeScript types based on your GraphQLSchema _and_ your GraphQL operations and fragments. It generates types for your GraphQL documents: Query, Mutation, Subscription and Fragment.
```
yarn add -D @graphql-codegen/typescript-document-nodes
```
This plugin generates TypeScript source (`.ts`) file from GraphQL files (`.graphql`).

### Codegen.yml file 
To pass configuration to GraphQL Codegen, you need to create a  `codegen.yml` inside of your project root with the following content:
```yml
overwrite: true
schema: "<graphql_endpoint>"
documents: 
  - "src/**/*.graphql"
generates:
  <generated_path.ts>:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-document-nodes"
```
Where `<graphql_endpoint>` is an URL to your GraphQL endpoint, a local path to `.graphql` file, a glob pattern to your GraphQL schema files, or a JavaScript file that exports the schema to generate code from. This can also be an array which specifies multiple schemas to generate code from.

`<generated_path.ts>` represents an output path for the generated cod, ex of path: `src/graphql/generated/graphql.ts`


`documents` is an array of paths or glob patterns for files which export GraphQL documents using a gql tag or a plain string; in our example we are using `./src/**/*.graphql` that will get all files with extension `.graphql`

### Generate TypesScript typing
Add the following line in your scripts object inside of package.json file:
```
"gqlgen:development": "graphql-codegen --config codegen.yml"
```
To generate simply call:
```
./yarn gqlgen:development
```
`./yarn` is calling the yarn inside of the container. If you don't have the file and wish to create it then follow the instructions below

Create `yarn` file
```sh
touch yarn
```

Make it executable
```sh
chmod +x yarn
```

Add the following code inside of the file and replace the `<NAME>` with the container name:
```sh
#!/usr/bin/env bash
docker-compose exec <NAME> yarn $@

```
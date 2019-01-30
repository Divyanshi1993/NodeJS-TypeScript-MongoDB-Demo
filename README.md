# Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

This is a simple API that saves contact information of people. 

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git https://github.com/Divyanshi1993/rest-api-node-typescript-mongodb .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing over HTTP (tag [v1.0.0](https://github.com/Divyanshi1993/rest-api-node-typescript-mongodb)

The default URL is: *http://localhost:3500*

+ GET all contacts

```
Send GET request to http://localhost:3500/contact/
```

The default URL is: *https://localhost:3500*


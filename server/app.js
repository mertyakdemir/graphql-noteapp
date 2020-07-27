const express = require('express');
const mongoose = require('mongoose'); 
require('dotenv').config();
const {importSchema} = require('graphql-import');
const {ApolloServer} = require('apollo-server-express');

const resolvers = require('./graphql/resolvers/index');

const User = require('./models/User');
const Reflect = require('./models/reflect');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/types/schema.graphql'),
    resolvers,
    context: {
        User,
        Reflect
    }
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true })


const app = express();
server.applyMiddleware({ app });

app.listen({port:3001}, () => {
    
})
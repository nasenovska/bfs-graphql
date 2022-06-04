import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from 'express';
import jwt from 'express-jwt'
import 'reflect-metadata';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Context } from './common/context';
import { getSchema } from './common/schema';

dotenv.config();

const graphQlPath = process.env.GRAPHQL_PATH;
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URL

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    credentialsRequired: false,
})

mongoose.connect(dbUrl, {
    autoIndex: true,
})
    .then(() => {
        console.log('Connected to storage -> MongoDB')
    })
    .catch((e) => {
        console.log(e);
    })

async function startApolloServer() {

    const app = express();
    const httpServer = http.createServer(app);

    app.use(
        graphQlPath,
        cors({
            origin: '*'
        }),
        bodyParser.json(),
        auth,
    )
    const schema = await getSchema();

    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer}),
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        introspection: true,
        context: ({req}) => {
            const context: Context = {
                req,
                user: req.user
            }
            return context;
        },

    });

    await server.start();

    server.applyMiddleware({app, path: '/graphql'});

    await new Promise(() => httpServer.listen({port}));

    console.log(`Server started at http://localhost:${port}/${graphQlPath}`);
    return {server, app};

}

startApolloServer()

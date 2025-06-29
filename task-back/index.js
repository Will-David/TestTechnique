"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const taskRoute_1 = require("./routes/taskRoute");
const server = (0, fastify_1.default)({ logger: true });
server.get('/ping', async (request, reply) => {
    return 'pong\n';
});
server.register(taskRoute_1.taskRoutes, { prefix: '/api/v1' });
server.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Content-Type']
});
const serverBackend = () => {
    try {
        server.listen({ port: 3000 });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
serverBackend();

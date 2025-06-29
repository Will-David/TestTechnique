import fastify from 'fastify'
import cors from '@fastify/cors'
import { taskRoutes } from './routes/taskRoute'

const server = fastify({logger: true})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register(taskRoutes, { prefix: '/api/v1' })

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Content-Type']
})

const serverBackend = () => {
    try {
        server.listen({port: 3000})
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

serverBackend()
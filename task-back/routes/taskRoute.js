"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const taskController_1 = require("../controllers/taskController");
const taskRoutes = (fastify) => {
    fastify.get('/tasks', taskController_1.getAllTaskController);
    fastify.post('/tasks', taskController_1.createTaskController);
    fastify.get('/tasks/:id', taskController_1.getTaskByIdController);
    fastify.put('/tasks/:id', taskController_1.updateTaskController);
    fastify.delete('/tasks/:id', taskController_1.deleteTaskController);
};
exports.taskRoutes = taskRoutes;

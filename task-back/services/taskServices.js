"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTaskService = exports.updateTaskByIdServices = exports.getTaskByIdServices = exports.getAllTaskServices = exports.createTaskService = void 0;
let tasks = [];
const createTaskService = (data) => {
    const task = {
        title: data.description,
        description: data.description,
        status: data.status,
        id: crypto.randomUUID()
    };
    tasks.push(task);
    return task;
};
exports.createTaskService = createTaskService;
const getAllTaskServices = () => {
    return tasks;
};
exports.getAllTaskServices = getAllTaskServices;
const getTaskByIdServices = (id) => {
    const taskId = tasks.find((task) => (task.id === id));
    return taskId;
};
exports.getTaskByIdServices = getTaskByIdServices;
const updateTaskByIdServices = (id, data) => {
    const task = (0, exports.getTaskByIdServices)(id);
    if (!task) {
        return "Cet Id id n'existe pas";
    }
    task.title = data.title;
    task.description = data.description;
    task.status = data.status;
    return task;
};
exports.updateTaskByIdServices = updateTaskByIdServices;
const removeTaskService = (id) => {
    const task = (0, exports.getTaskByIdServices)(id);
    if (!task) {
        return "Aucune tâche trouvé";
    }
    const taskIndex = tasks.findIndex((task) => task.id === id);
    console.log(taskIndex);
    if (taskIndex === -1) {
        return false;
    }
    tasks.splice(taskIndex, 1);
    return true;
};
exports.removeTaskService = removeTaskService;

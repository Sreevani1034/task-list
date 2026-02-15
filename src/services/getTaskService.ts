const { Task } = require("../../models"); 

const getTaskService = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (error :any) {
    throw new Error("Error fetching orders: " + error.message);
  }
};

module.exports = { getTaskService };

const { order } = require("../../models"); 

const getTaskService = async () => {
  try {
    const orders = await order.findAll();
    return orders;
  } catch (error :any) {
    throw new Error("Error fetching orders: " + error.message);
  }
};

module.exports = { getTaskService };

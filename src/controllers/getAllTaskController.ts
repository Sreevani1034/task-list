const { getTaskService } = require("../services/getTaskService");
import { Response,Request } from 'express';

const getAllTaskController = async (req:Request, res:Response) => {
  try {
    const orders = await getTaskService();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error:any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch orders",
    });
  }
};

module.exports = { getAllTaskController };

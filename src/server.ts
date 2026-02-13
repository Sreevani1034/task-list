import express from 'express';
import dotenv from 'dotenv';
const taskRoute = require("./src/routes/orderRoutes"); 
dotenv.config();
const app: express.Application = express();
const port=process.env.PORT;
app.use(express.json());
app.use("/api", taskRoute); 
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
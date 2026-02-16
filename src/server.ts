import express from 'express';
import dotenv from 'dotenv';

const taskRoute = require("./routes/taskRoute");

dotenv.config();

const app: express.Application = express();

const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use("/api", taskRoute);

app.get('/', (_req, res) => {
  res.send("TypeScript With Express");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

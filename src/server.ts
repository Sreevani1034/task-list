import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app: express.Application = express();
const port=process.env.PORT;
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
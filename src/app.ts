import express from "express";
import UserRouters from "./routers/UserRoutes";
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use("/api", UserRouters);
app.listen(port, ()=>{
    console.log(`Servidor online em http://127.0.0.1: ${port}`);
});
import express from "express";
import productsRouter from "./routes/products.js";
import usersRouter from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => console.log("Rodando em http://localhost:3000"));
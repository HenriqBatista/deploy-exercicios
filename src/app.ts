import express, { Request, Response } from "express";
import cors from "cors";
// import endpoints get
import { getAllProducts } from "./endpoints/getAllProducts";
import { getProductById } from "./endpoints/getProductById";
import { getProductByName } from "./endpoints/getProductByName";


/// APIs e Express
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003.");
});


// Endpoints metodo GET
app.get("/products", getAllProducts)
app.get("/products/search", getProductByName)
app.get("/products/:id", getProductById)

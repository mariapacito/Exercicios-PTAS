import { Router } from "express";
import { valida } from "../middlewares/valida.js";
import { productSchema } from "../schemas/product.schema.js";

const router = Router();
const products = [];

router.get("/", (req, res) => res.json(products));

router.post("/", valida(productSchema), (req, res) => {
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
});

router.put("/:id", valida(productSchema), (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ erro: "produto não encontrado" });

  Object.assign(product, req.body);
  res.json(product);
});

export default router;
import { Router } from "express";
import { valida } from "../middlewares/valida.js";
import { userSchema } from "../schemas/user.schema.js";

const router = Router();
const users = [];

router.get("/", (req, res) => res.json(users));

router.post("/", valida(userSchema), (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

router.put("/:id", valida(userSchema), (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ erro: "usuário não encontrado" });

  Object.assign(user, req.body);
  res.json(user);
});

export default router;
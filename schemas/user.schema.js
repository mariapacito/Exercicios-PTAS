import { z } from "zod";

export const userSchema = z.object({
  nome: z.string("nome é obrigatório").min(1, "nome não pode ser vazio"),
  email: z.email("email inválido"),
});
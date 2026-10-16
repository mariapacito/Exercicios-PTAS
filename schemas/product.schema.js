import { z } from "zod";

export const productSchema = z.object({
  nome: z.string("nome é obrigatório").min(1, "nome não pode ser vazio"),
  preco: z.number("preco deve ser um número").positive("preco deve ser maior que zero"),
});
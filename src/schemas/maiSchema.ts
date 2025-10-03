import z from "zod";

export const SendMailSchema = z.object({
  name: z
    .string()
    .min(3, { message: "el nombre no puede tener menos de 3 caracteres" })
    .max(30, { message: "El nombre no puede tener más de 30 caracteres" }),
  email: z
    .string()
    .email({ message: "Debes ingresar un correo electrónico válido" }),
  message: z
    .string()
    .min(10, { message: "El mensaje no puede tener menos de 10 caracteres" })
    .max(500, { message: "El mensaje no puede tener más de 500 caracteres" }),
});
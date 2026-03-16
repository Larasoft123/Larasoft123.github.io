import type { APIRoute } from "astro";
import { Resend } from 'resend';
import z from "astro/zod";


export const SendMailSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre no puede tener menos de 3 caracteres" })
    .max(30, { message: "El nombre no puede tener más de 30 caracteres" }),
  subject: z
    .string()
    .min(3, { message: "El asunto no puede tener menos de 3 caracteres" })
    .max(30, { message: "El asunto no puede tener más de 30 caracteres" }),
  email: z
    .email({ message: "Debes ingresar un correo electrónico válido" }),
  message: z
    .string()
    .min(10, { message: "El mensaje no puede tener menos de 10 caracteres" })
    .max(500, { message: "El mensaje no puede tener más de 500 caracteres" }),
});



export const prerender = false;


const rateLimiter = new Map<string, number[]>();
const RATE_LIMIT_SEC = 60;
const MAX_REQUESTS = 3;

// HTML Escaping function against XSS injection
const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  // 1. Rate Limiting Check (by IP)
  const ip = request.headers.get("x-forwarded-for") || clientAddress || "unknown_ip";
  const now = Date.now();
  const windowStart = now - (RATE_LIMIT_SEC * 1000);
  
  let timestamps = rateLimiter.get(ip) || [];
  timestamps = timestamps.filter(time => time > windowStart);
  
  if (timestamps.length >= MAX_REQUESTS) {
    return new Response(
      JSON.stringify({ message: "Demasiadas peticiones. Por favor, intenta de nuevo en un minuto." }),
      { status: 429 }
    );
  }
  
  timestamps.push(now);
  rateLimiter.set(ip, timestamps);
  
  try {
    const formData = await request.formData();
    
    
    const honey = formData.get("_honey")?.toString();
    if (honey) {
      
      return new Response(JSON.stringify({ message: "Email enviado con éxito" }), { status: 200 });
    }

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const message = formData.get("message")?.toString();

    const result = SendMailSchema.safeParse({ name, email, subject, message });

    if (!result.success) {
      return new Response(
        JSON.stringify({ message: result.error.issues.map((issue) => issue.message).join(", ") }),
        { status: 400 }
      );
    }
    
    // 3. HTML Sanitization
    const safeName = escapeHtml(name!);
    const safeEmail = escapeHtml(email!);
    const safeSubject = escapeHtml(subject!);
    const safeMessage = escapeHtml(message!);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [import.meta.env.EMAIL],
      subject: `[Web Contact] ${safeSubject}`,
      html: `<h3>Nuevo Mensaje de ${safeName}</h3><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Mensaje:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Email enviado con éxito", data }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
};
"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Proyecto nuevo: ${data.get("name")}`);
    const body = encodeURIComponent(`Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:tu-email@ejemplo.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Tu nombre<input name="name" required autoComplete="name" /></label>
      <label>Tu email<input name="email" type="email" required autoComplete="email" /></label>
      <label>¿En qué podemos colaborar?<textarea name="message" required rows={4} /></label>
      <button type="submit">Enviar mensaje <span aria-hidden="true">↗</span></button>
      {sent && <p className="form-note" role="status">Se abrió tu aplicación de correo. Si no aparece, escribe directamente al email de arriba.</p>}
    </form>
  );
}

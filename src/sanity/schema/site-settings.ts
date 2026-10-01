import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Datos del portafolio",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Título profesional", type: "string" }),
    defineField({ name: "bio", title: "Biografía", type: "text", rows: 5 }),
    defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.email() }),
    defineField({ name: "photo", title: "Fotografía", type: "image", options: { hotspot: true } }),
    defineField({ name: "github", title: "GitHub", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
    defineField({ name: "resume", title: "CV", type: "file" }),
  ],
});

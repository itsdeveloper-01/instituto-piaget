window.CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    media_folder: "public/uploads",
    public_folder: "/uploads",
    logo_url: "/images/logo-piaget.png",
    site_url: "https://instituto-piaget-43cj.vercel.app",
    locale: "es",
    collections: [
      {
        name: "pages",
        label: "Páginas",
        files: [
          {
            file: "content/home.md",
            label: "Inicio",
            name: "home",
            fields: [
              { label: "Título", name: "title", widget: "string" },
              { label: "Descripción", name: "description", widget: "text" },
              { label: "Contenido", name: "body", widget: "markdown" },
              { label: "URL de Facebook", name: "facebook_url", widget: "string" },
              { label: "URL de Instagram", name: "instagram_url", widget: "string" },
              { label: "Embed Post de Instagram", name: "instagram_embed_url", widget: "string" },
            ],
          },
        ],
      },
    ],
  },
});

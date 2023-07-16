export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Formularios de Salud",
      link: [
        {
          rel: "icon",
          type: "image",
          href: "/assets/aid_white.png",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
});

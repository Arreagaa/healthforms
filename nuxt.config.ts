export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Formularios Tarbut",
      link: [
        {
          rel: "icon",
          type: "image",
          href: "/assets/tarbut.png",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    viewer: true,
  },
});

<script setup>
import FCircule from "./utils/FCircule.vue";
</script>
<template>
  <div class="flex justify-center items-center lg:h-screen">
    <div class="lg:py-20 pt-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
            <div class="hero-content">
              <h1
                class="text-dark font-bold text-4xl sm:text-5xl lg:text-6xl mb-4"
              >
                Formularios <br />
                de Salud.
              </h1>
              <p class="text-base mb-8 text-gray-700 max-w-prose lg:max-w-md">
                Archivos Médicos Escolares, nuestra misión es velar por la salud
                y el bienestar de todos los estudiantes en edad escolar, desde
                kinder hasta secundaria. Atentamente el Departamento de
                Enfermería.
              </p>
              <ul
                class="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 space-y-4 items-start"
              >
                <li>
                  <NuxtLink
                    to="/form-kinder"
                    class="flex border-link rounded border border-blue-500 px-5 py-3 font-medium text-zinc-800 shadow-md hover:shake flex items-center"
                  >
                    Formulario de Kinder
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/form-secundaria"
                    class="flex border-link rounded border border-blue-500 px-5 py-3 font-medium text-zinc-800 shadow-md hover:shake flex items-center"
                  >
                    Formulario de Secundaria y Prepa
                  </NuxtLink>
                </li>
              </ul>
              <div class="pt-16">
                <h6
                  class="font-bold text-sm flex items-center text-gray-500 mb-2"
                >
                  Powered by
                  <span
                    class="w-8 h-[1px] bg-gray-500 inline-block ml-2"
                  ></span>
                </h6>
                <div class="flex items-center">
                  <a
                    href="https://schoolaid.app/"
                    target="_blank"
                    class="py-3 mr-4"
                  >
                    <img src="/assets/schoolaid.png" class="md:w-56 w-48" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-7/12 px-4">
            <div class="lg:text-right lg:ml-auto">
              <div class="relative inline-block z-10">
                <img
                  src="/assets/nurse.jpg"
                  class="max-w-full h-auto lg:w-full rounded-lg"
                />
                <FCircule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
}
@media (max-width: 320px) {
  .border-link {
    width: 90%;
  }
}
.hover\:shake:hover {
  animation: shake 0.5s;
}
</style>

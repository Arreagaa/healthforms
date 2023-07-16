<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center py-6 sm:py-12"
  >
    <div class="max-w-xl px-5 text-center">
      <div class="pb-8 text-8xl text-zinc-800">
        <i class="fa fa-user-nurse"></i>
      </div>
      <h2 class="mb-2 md:text-4xl text-3xl font-bold text-zinc-800">
        Formularios de Salud
      </h2>
      <p class="mb-2 text-lg text-zinc-500">Archivos médicos escolares.</p>
    </div>
    <div class="flex flex-col items-center text-left mt-3">
      <NuxtLink
        to="/kinder"
        class="border-link mt-3 w-full sm:w-96 inline-block rounded border border-blue-500 px-5 py-3 font-medium text-zinc-800 shadow-md hover:shake flex items-center"
      >
        <div class="mr-4">
          <i class="fa fa-circle-check"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold">Kinder</h3>
          <p class="text-zinc-500">Acceder al formulario</p>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/secu"
        class="border-link mt-3 w-full sm:w-96 inline-block rounded border border-blue-500 px-5 py-3 font-medium text-zinc-800 shadow-md hover:shake flex items-center"
      >
        <div class="mr-4">
          <i class="fa fa-circle-check"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold">Secundaria y Prepa</h3>
          <p class="text-zinc-500">Acceder al formulario</p>
        </div>
      </NuxtLink>
    </div>
    <p class="py-4 text-lg text-zinc-500">Departamento de enfermería.</p>
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

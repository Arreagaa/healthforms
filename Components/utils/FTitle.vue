<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="xl:w-full border-b border-gray-300 py-5">
    <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
      <p class="text-xl text-gray-800 font-bold">
        {{ title }}
      </p>
      <div class="ml-2 cursor-pointer text-gray-600">
        <i class="fa fa-circle-info"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentDate() {
      const currentDate = new Date().toISOString().split("T")[0];
      return currentDate;
    },
  },
};
</script>
<template>
  <div class="px-4">
    <label class="pb-2 pr-2 text-sm font-bold text-gray-800">Fecha</label>
    <input
      class="border border-gray-300 px-3 py-3 shadow-sm rounded text-sm text-center focus-input bg-transparent placeholder-gray-500 text-gray-600"
      type="text"
      :value="getCurrentDate()"
      disabled
      readonly
    />
  </div>
</template>

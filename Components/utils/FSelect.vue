<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<template>
  <div class="flex flex-col px-4 pt-4">
    <label :for="'select-' + name" class="pb-2 text-sm font-bold text-gray-800">
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="'select-' + name"
        :name="name"
        :required="required"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        class="border border-gray-300 px-3 py-3 shadow-sm rounded text-sm focus-input bg-white placeholder-gray-500 text-gray-600 appearance-none w-full"
      >
        <slot></slot>
      </select>
      <div
        class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-sm"
      >
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
  </div>
</template>

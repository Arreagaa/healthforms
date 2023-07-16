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
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="mt-8 flex flex-col px-4">
    <label :for="name" class="pb-2 text-sm font-bold text-gray-800">{{
      label
    }}</label>
    <textarea
      :id="name"
      :name="name"
      :value="value"
      :required="required"
      @input="$emit('update:value', $event.target.value)"
      class="bg-white border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus-input resize-none placeholder-gray-500 text-gray-600"
      :placeholder="placeholder"
      rows="5"
    ></textarea>
  </div>
</template>

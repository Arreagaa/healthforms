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
    type: {
      type: String,
      default: "text",
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
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="flex flex-col px-4 pt-4">
    <label :for="'input-' + name" class="pb-2 text-sm font-bold text-gray-800">
      {{ label }}
    </label>
    <span v-if="description" class="text-sm py-2 text-gray-600">
      {{ description }}
    </span>
    <input
      :type="type"
      :id="'input-' + name"
      :name="name"
      :required="required"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      class="border border-gray-300 px-3 py-3 shadow-sm rounded text-sm focus-input bg-transparent placeholder-gray-500 text-gray-600"
      :placeholder="placeholder"
    />
  </div>
</template>

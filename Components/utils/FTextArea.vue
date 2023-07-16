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
    defaultValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selection: null,
      textValue: this.value || this.defaultValue,
    };
  },
  watch: {
    selection(value) {
      if (value === "No") {
        this.textValue = "No";
      } else {
        this.textValue = this.value || this.defaultValue;
      }
    },
    textValue(value) {
      if (this.selection !== "Yes") {
        this.$emit("update:value", value);
      }
    },
  },
};
</script>
<template>
  <div class="flex flex-col px-4 pt-4">
    <label :for="name" class="pb-2 text-sm font-bold text-gray-800">{{
      label
    }}</label>
    <div class="flex items-center space-x-6 px-2 py-2">
      <div class="flex items-center">
        <input
          type="radio"
          :name="`${name}-radio`"
          :id="`${name}-yes`"
          class="h-5 w-5"
          value="Yes"
          v-model="selection"
        />
        <label :for="`${name}-yes`" class="pl-3 text-sm text-[#07074D]"
          >Si</label
        >
      </div>
      <div class="flex items-center">
        <input
          type="radio"
          :name="`${name}-radio`"
          :id="`${name}-no`"
          class="h-5 w-5"
          value="No"
          v-model="selection"
        />
        <label :for="`${name}-no`" class="pl-3 text-sm text-[#07074D]"
          >No</label
        >
      </div>
    </div>
    <textarea
      :id="name"
      :name="name"
      required
      class="bg-white border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus-input resize-none placeholder-gray-500 text-gray-600"
      :placeholder="placeholder"
      rows="5"
      v-model="textValue"
      @input="$emit('update:value', $event.target.value)"
      :disabled="selection !== 'Yes'"
    ></textarea>
  </div>
</template>

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
      type: [String, Number, Date],
      default: null,
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
  data() {
    return {
      selection: null,
      inputValue: this.value ? String(this.value) : "",
    };
  },
  watch: {
    selection(value) {
      if (value === "No") {
        if (this.type === "date") {
          this.inputValue = "No";
          this.$emit("update:value", "No");
        } else {
          this.inputValue = value;
          this.$emit("update:value", value);
        }
      } else {
        this.inputValue = "";
        this.$emit("update:value", this.getDefaultValueByType());
      }
    },
    value(newValue) {
      this.inputValue = newValue ? String(newValue) : "";
      this.selection = newValue ? "Yes" : "No";
    },
  },
  methods: {
    getDefaultValueByType() {
      if (this.type === "number") {
        return 0;
      } else if (this.type === "date") {
        return new Date();
      } else {
        return "";
      }
    },
  },
};
</script>
<template>
  <div class="flex flex-col px-4 pt-4">
    <label class="pb-2 text-sm font-bold text-gray-800">
      {{ label }}
    </label>
    <div class="flex flex-col items-start space-y-2">
      <div
        :class="['flex', 'items-center', 'space-x-6', { 'py-2': !description }]"
      >
        <div class="flex items-center">
          <input
            type="radio"
            :name="name + '-radio'"
            :id="name + '-yes'"
            class="h-5 w-5"
            value="Yes"
            v-model="selection"
          />
          <label :for="name + '-yes'" class="pl-3 text-sm text-[#07074D]">
            Sí
          </label>
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            :name="name + '-radio'"
            :id="name + '-no'"
            class="h-5 w-5"
            value="No"
            v-model="selection"
          />
          <label :for="name + '-no'" class="pl-3 text-sm text-[#07074D]">
            No
          </label>
        </div>
      </div>
      <span v-if="description" class="text-sm py-2 text-gray-600">
        {{ description }}
      </span>
    </div>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="inputValue"
      :required="required"
      @input="$emit('update:value', $event.target.value)"
      class="border border-gray-300 px-3 py-3 shadow-sm rounded text-sm focus-input bg-transparent placeholder-gray-500 text-gray-600"
      :placeholder="placeholder"
      :disabled="selection !== 'Yes'"
    />
  </div>
</template>

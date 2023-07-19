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
      default: null,
    },
  },
  data() {
    return {
      selection: null,
    };
  },
  watch: {
    selection(value) {
      this.$emit("update:value", value === "Yes" ? "Si" : "No");
    },
  },
};
</script>

<template>
  <div class="flex flex-col px-4 pt-4">
    <label :for="name" class="pb-2 text-sm font-bold text-gray-800">
      {{ label }}
    </label>
    <div class="flex flex-col items-start space-y-2">
      <div :class="['flex', 'items-center', 'space-x-6']">
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
    </div>
  </div>
</template>

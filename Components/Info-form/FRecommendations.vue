<script>
export default {
  props: {
    order: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    normalizedText() {
      return this.text.replace(/\r\n/g, "\n");
    },
  },
};
</script>
<template>
  <div class="text-base text-gray-800">
    <ul>
      <li>
        <span class="font-bold">{{ order }}.-</span>
        {{ normalizedText }}
      </li>
    </ul>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      signaturePad: null,
    };
  },
  mounted() {
    this.initializeSignaturePad();
  },
  methods: {
    initializeSignaturePad() {
      const canvas = this.$refs.canvas;
      this.signaturePad = new SignaturePad(canvas);

      if (this.modelValue) {
        this.signaturePad.fromDataURL(this.modelValue);
      }
    },
    clear() {
      this.signaturePad.clear();
      this.updateSignature();
    },
    updateSignature() {
      const signatureData = this.signaturePad.isEmpty()
        ? null
        : this.signaturePad.toDataURL();
      this.$emit("update:modelValue", signatureData);
    },
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        this.signaturePad.fromDataURL(newValue);
      } else {
        this.signaturePad.clear();
      }
    },
  },
  beforeUnmount() {
    this.signaturePad.off();
  },
};
</script>
<template>
  <div class="py-4 px-4 space-y-2">
    <label class="pb-2 text-sm font-bold text-gray-800">{{ label }}</label>
    <canvas
      class="border border-gray-300 shadow-sm rounded focus-input"
      ref="canvas"
    ></canvas>
    <div class="flex flex-col items-start space-y-2">
      <button @click.prevent="clear" class="border-signature">
        Borrar firma
      </button>
      <button @click.prevent="updateSignature" class="border-signature">
        Guardar firma
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    class="border border-solid border-gray-300 rounded-md p-1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

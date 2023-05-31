<script setup lang="ts">
const props = defineProps({ sum: Number });
</script>

<template>
  <p class="text-lg bg-zinc-200 p-4 text-center">
    Balance:
    <span
      :class="
        props.sum !== undefined
          ? props.sum >= 0
            ? 'text-black'
            : 'text-red-400'
          : 'text-black'
      "
      >{{ props.sum }}</span
    >
  </p>
</template>

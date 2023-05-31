<script setup lang="ts">
import { useEntriesStore } from "../utility/stroes/entries";

const props = defineProps({ id: String, type: String, amount: Number });
const entriesStore = useEntriesStore();
const classPre =
  "flex justify-between items-center px-4 py-2 border-l-2 bg-slate-200/30";
const className =
  props.type === "expense"
    ? classPre + " border-red-400"
    : classPre + " border-green-400";

function updateAmount(e: any) {
  if (props.id) {
    entriesStore.updateEntryAmount(props.id, parseInt(e.target.value));
  }
}
function xHandler() {
  if (props.id) {
    entriesStore.deleteEntry(props.id);
  }
}
</script>

<template>
  <div :class="className">
    <span
      >amount: {{ type === "expense" ? "-" : " " }}
      <input
        type="number"
        :value="props.amount"
        min="0"
        class="w-20"
        v-on:change="(e) => updateAmount(e)"
      />$</span
    >
    <font-awesome-icon
      class="hover:cursor-pointer text-red-400"
      icon="fa-solid fa-x"
      @click="() => xHandler()"
    />
  </div>
</template>

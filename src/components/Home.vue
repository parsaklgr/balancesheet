<script setup lang="ts">
import Balance from "./Balance.vue";
import EntryContainer from "./EntryContainer.vue";
import { useEntriesStore } from "../utility/stroes/entries";
const entriesStore = useEntriesStore();
</script>
<template>
  <main class="flex-auto flex justify-center items-center">
    <div class="flex flex-col items-stretch w-[32rem]">
      <Balance :sum="entriesStore.sum" />
      <div class="flex gap-1">
        <EntryContainer :entries="entriesStore.revenues" type="revenue" />
        <EntryContainer :entries="entriesStore.expenses" type="expense" />
      </div>
    </div>
  </main>
</template>

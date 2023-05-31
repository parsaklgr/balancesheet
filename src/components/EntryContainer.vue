<script setup lang="ts">
import { useEntriesStore } from "../utility/stroes/entries";
import Entry from "./Entry.vue";

const props = defineProps(["entries", "type"]);
const entriesStore = useEntriesStore();

function plusHandler() {
  entriesStore.addEntry(props.type);
}
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div class="flex justify-between items-center py-2">
      <h2>{{ type === "expense" ? "Expenses:" : "Revenues:" }}</h2>
      <font-awesome-icon
        class="mr-4 bg-blue-400 p-2 rounded-md hover:cursor-pointer"
        icon="fa-solid fa-plus"
        @click="() => plusHandler()"
      />
    </div>
    <ul>
      <Entry
        v-for="entry of props.entries"
        :key="entry.id"
        :id="entry.id"
        :type="props.type"
        :amount="parseFloat(entry.amount)"
      />
    </ul>
  </div>
</template>

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { entry } from "../types";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref<entry[]>([]);
  const revenues = computed(() =>
    entries.value.filter((entry) => entry.type === "revenue")
  );
  const expenses = computed(() =>
    entries.value.filter((entry) => entry.type === "expense")
  );
  const sum = computed(() => {
    const sumOfRevenues = revenues.value.reduce((sum, entry) => {
      return sum + entry.amount;
    }, 0);
    const sumOfExpenses = expenses.value.reduce((sum, entry) => {
      return sum + entry.amount;
    }, 0);
    return sumOfRevenues - sumOfExpenses;
  });
  function addEntry(type: string) {
    entries.value.push({ id: uuidv4(), type: type, amount: 0 });
  }
  function updateEntryAmount(id: string, newAmount: number) {
    entries.value = entries.value.map((entry) => {
      if (entry.id === id) {
        return { ...entry, amount: newAmount };
      }
      return entry;
    });
  }
  function deleteEntry(id: string) {
    entries.value = entries.value.filter((entry) => entry.id !== id);
  }
  return {
    entries,
    revenues,
    expenses,
    sum,
    addEntry,
    updateEntryAmount,
    deleteEntry,
  };
});

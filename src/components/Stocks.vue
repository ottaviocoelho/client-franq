<template>
  <section>
    <h2>Stocks</h2>
    <FinanceTable :headers="HEADERS" :data="stocksItems"/>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FinanceTable from '../components/FinanceTable.vue';
import { getStocks } from '../financeApi'
import type { Maybe, Stocks } from '../models'

const HEADERS = ["name", "location", "points", "variation"]
const stocksData = ref<Maybe<Stocks>>();
const stocksItems = computed(() => stocksData.value ? Object.values(stocksData.value) : [])

const updateData = async () => {
  const stocks = await getStocks()
  stocksData.value = stocks
}

onMounted(async () => {
  updateData()
  setInterval(updateData, 30000);
})

</script>
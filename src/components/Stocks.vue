<template>
  <section>
    <h2>Stocks</h2>
    <FinanceTable :headers="HEADERS" :data="stocksItems" prependHref="/stocks/" />
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import FinanceTable from '../components/FinanceTable.vue';
import type {  Stocks } from '../model/financeData'
import type { RecurrentData } from '../hooks/recurrentData'

const HEADERS = ["name", "location", "points", "variation"]

const stocksRecurrentData = inject<RecurrentData<Stocks>>('stocksData')

const stocksData = computed(() => stocksRecurrentData?.currentData.value)
const stocksItems = computed(() => stocksData.value ? Object.values(stocksData.value) : [])


</script>
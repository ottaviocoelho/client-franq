<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { getBitcoin, getCurrencies, getStocks, getTaxes } from '../financeApi'
import { useRecurrentData } from '../hooks/recurrentData'
import type { Bitcoin, Currencies, Stocks, Taxes } from '../model/financeData'

const currencies = useRecurrentData<Currencies>(getCurrencies)
const bitcoin = useRecurrentData<Bitcoin>(getBitcoin)
const stocks = useRecurrentData<Stocks>(getStocks)
const taxes = useRecurrentData<Taxes>(getTaxes)

provide('currenciesData', currencies)
provide('bitcoinData', bitcoin)
provide('stocksData', stocks)
provide('taxesData', taxes)

</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>
<template>
  <main class="container">
    <button class="logoff-button danger" @click="logOff">{{ LOG_OF }}</button>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { getBitcoin, getCurrencies, getStocks, getTaxes } from '../financeApi'
import { useRecurrentData } from '../hooks/recurrentData'
import type { Bitcoin, Currencies, Stocks, Taxes } from '../model/financeData'
import { LOG_OF } from "../messages"
import { logOff } from '../userApi'

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
  width: 100%;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  position: relative;
}

.container > .logoff-button {
  position: absolute;
  right: 20px;
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
</style>
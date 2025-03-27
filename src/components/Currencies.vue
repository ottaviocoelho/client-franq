<template>
  <section>
    <h2>Currencies {{ currenciesData ? `(from ${currenciesData?.source})` : '' }}</h2>
    <FinanceTable :headers="HEADERS" :data="currenciesItems"/>
  </section>
</template>

<script setup lang="ts">
import FinanceTable from '../components/FinanceTable.vue';
import { computed, onMounted, ref } from 'vue'
import type { Currencies, Maybe } from '../models'
import { getCurrencyItemsKeys } from '../maps'
import type { CurrencyItem } from '../models'
import { getCurrencies } from '../financeApi'

const HEADERS = ["name", "buy", "sell", "variation"]

const currenciesData = ref<Maybe<Currencies>>();

const currenciesItemsKeys = computed<string[]>(() => currenciesData.value ? getCurrencyItemsKeys(currenciesData.value) : [])

const currenciesItems = computed<CurrencyItem[]>(() => {
  if(currenciesData.value) {
    return currenciesItemsKeys.value.map((key: string) => (currenciesData.value as Currencies)[key]) as CurrencyItem[]
  } else {
    return []
  }
})

const updateData = async () => {
  const currencies = await getCurrencies()
  currenciesData.value = currencies
}

onMounted(async () => {
  updateData()
  setInterval(updateData, 30000);
})


</script>
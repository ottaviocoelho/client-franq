<template>
  <section>
    <h2>Currencies {{ currenciesData ? `(from ${currenciesData?.source})` : '' }}</h2>
    <FinanceTable :headers="HEADERS" :data="currenciesItems" @item-click="itemClickHandler" prependHref="/currencies/"/>
  </section>
</template>

<script setup lang="ts">
import FinanceTable from '../components/FinanceTable.vue';
import { computed, inject } from 'vue'
import type { Currencies } from '../model/financeData'
import { getCurrencyItemsKeys } from '../maps'
import type { CurrencyItem } from '../model/financeData'
import type { RecurrentData } from '../hooks/recurrentData'
import router from '../router'

const HEADERS = ["name", "buy", "sell", "variation"]

const currenciesRecurrentData = inject<RecurrentData<Currencies>>('currenciesData')
const currenciesData = computed(() => currenciesRecurrentData?.currentData.value);

const currenciesItemsKeys = computed<string[]>(() => currenciesData.value ? getCurrencyItemsKeys(currenciesData.value) : [])

const currenciesItems = computed<CurrencyItem[]>(() => {
  if(currenciesData.value) {
    return currenciesItemsKeys.value.map((key: string) => (currenciesData.value as Currencies)[key]) as CurrencyItem[]
  } else {
    return []
  }
})

const itemClickHandler = (item: any) => {
  router.push('/currencies/' + item.key)
}

</script>
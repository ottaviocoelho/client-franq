<template>
  <section>
    <h2>Bitcoin</h2>
    <FinanceTable :headers="HEADERS" :data="bitcoinItems" prependHref="/bitcoin/"/>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import FinanceTable from '../components/FinanceTable.vue';
import { getFormattedBitcoin } from '../maps'
import type { Bitcoin } from '../model/financeData'
import type { RecurrentData } from '../hooks/recurrentData'

const HEADERS = ["name", "last", "buy", "sell", "variation"]

const bitcoinRecurrentData = inject<RecurrentData<Bitcoin>>('bitcoinData')
const bitcoinData = computed(() => bitcoinRecurrentData?.currentData.value);
const bitcoinItems = computed(() => bitcoinData.value ? getFormattedBitcoin(bitcoinData.value) : [])

</script>
<template>
  <section>
    <h2>Bitcoin</h2>
    <FinanceTable :headers="HEADERS" :data="bitcoinItems"/>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FinanceTable from '../components/FinanceTable.vue';
import { getBitcoin } from '../financeApi'
import { getFormattedBitcoin } from '../maps'
import type { Bitcoin, Maybe } from '../models'

const HEADERS = ["name", "last", "buy", "sell", "variation"]
const bitcoinData = ref<Maybe<Bitcoin>>();
const bitcoinItems = computed(() => bitcoinData.value ? getFormattedBitcoin(bitcoinData.value) : [])

const updateData = async () => {
  const bitcoin = await getBitcoin()
  bitcoinData.value = bitcoin
}

onMounted(async () => {
  updateData()
  setInterval(updateData, 30000);
})

</script>
<template>
  <section>
    <h2>Taxes</h2>
    <FinanceTable :headers="HEADERS" :data="taxesData ??  []"/>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FinanceTable from '../components/FinanceTable.vue';
import { getTaxes } from '../financeApi'
import type { Maybe, Taxes } from '../model/financeData'

const HEADERS = ["date", "cdi", "selic", "daily_factor", "selic_daily", "cdi_dail"]
const taxesData = ref<Maybe<Taxes[]>>();

const updateData = async () => {
  const taxes = await getTaxes()
  taxesData.value = taxes
}

onMounted(async () => {
  updateData()
  setInterval(updateData, 10000);
})

</script>
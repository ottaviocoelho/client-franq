<template>
  <div class="finance-data-container">
    <h1>Finance Data</h1>
    <Currencies />
    <Stocks />
    <Bitcoin />
    <Taxes />
  </div>
</template>

<script setup lang="ts">
import Currencies from '../../components/Currencies.vue'
import Stocks from '../../components/Stocks.vue'
import Bitcoin from '../../components/Bitcoin.vue'
import Taxes from '../../components/Taxes.vue'

</script>

<style scoped>
.finance-data-container {
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
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
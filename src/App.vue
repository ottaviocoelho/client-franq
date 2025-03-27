<template>
  <div class="container">
    <h1>Finance Data</h1>
    <FinanceTable title="Currencies" endpoint="/currencies" />
    <FinanceTable title="Stocks" endpoint="/stocks" />
    <FinanceTable title="Bitcoin" endpoint="/bitcoin" />
    <FinanceTable title="Taxes" endpoint="/taxes" />
  </div>
</template>

<script setup lang="ts">
import FinanceTable from './components/FinanceTable.vue';
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
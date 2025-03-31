<template>
  <table v-if="data.length">
    <thead>
        <tr>
          <th v-for="(header) in headers" :key="header">{{ header.replace("_", " ") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i">
          <FinanceTableCell v-for="(header) in headers" :header="header" :key="item.key" :data="item[header]" :link="`${prependHref ?? ''}${item.key}`"/>
        </tr>
      </tbody>
  </table>
</template>

<script setup lang="ts">
import FinanceTableCell from './FinanceTableCell.vue'

defineProps<{ prependHref?: string; headers: string[]; data: {[key: string]: any;}[]}>()
</script>

<style scoped>

th {
  color: black;
  text-transform: capitalize
}

</style>
<template>
  <table v-if="data.length">
    <thead>
        <tr>
          <th v-for="(header) in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i" @click="$emit('item-click', item)">
          <td v-for="(header) in headers" :key="header">{{ item[header] ?? '-' }}</td>
        </tr>
      </tbody>
  </table>
</template>

<script setup lang="ts">
  defineProps<{headers: string[]; data: {[key: string]: any}[]}>()
</script>

<style scoped>

th {
  color: black
}

</style>
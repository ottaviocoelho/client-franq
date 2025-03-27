<template>
  <div>
    <h2>{{ title }}</h2>
    <table v-if="data.length">
      <thead>
        <tr>
          <th v-for="(value, key) in data[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(value, key) in item" :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No data available</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps<{ title: string; endpoint: string }>();
const data = ref<any[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000${props.endpoint}`);
    data.value = Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>
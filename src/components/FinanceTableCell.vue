<template>
  <td v-if="header == 'variation'" :class="`variation ${getVariationClass(data)}`">{{ data ?? '-' }}</td>
  <td v-else-if="header == 'name'" class="link" @click="$router.push(link ?? '')" :title="link">
    {{ data ?? '-' }}
  </td>
  <td v-else >{{ data ?? '-' }}</td>
</template>

<script setup lang="ts">

defineProps<{header: string, data: string | number, link?: string}>()

const getVariationClass = (data: string | number) => {
  if(typeof data == 'string') return ''
  if(data > 0) {
    return 'green'
  } else if (data < 0) {
    return 'red'
  }
}

</script>

<style scoped>

td.variation.green {
  color: green
}

td.variation.red {
  color: red
}

td.link {
  color: blue;
  text-decoration: underline;
}

td.link:hover {
  cursor: pointer;
}

</style>
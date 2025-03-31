<template>
  <div class="finance-item-container">
    <h2>Histórico de Preços - {{ key }}</h2>
    <div class="finance-item-wrapper">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import type { RecurrentData } from '../../hooks/recurrentData'
import { formatDate } from '../../utils/date'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


const route = useRoute()
const financeType = route.params.financeType as string
const key = route.params.key as string

const recurrentData = inject<RecurrentData<any>>(financeType + "Data") as RecurrentData<any>
const history = recurrentData.getHistoryByKey(key)

const options = {
  responsive: false,
  maintainAspectRatio: true
}

type Labels = string[]
type DataSets = {[key]: number[]}

const colors = ["red", "blue", "purple", "green", "yellow", "pink"]

const data = computed(() => {
  const labels: Labels = []
  const sets: DataSets = {}
  history.value.forEach((entry) => {
    labels.push(formatDate(entry.time))
    Object.keys(entry.value).filter(key => key != 'key' && key != 'name' && key != 'location').forEach(key => {
      if(!sets[key]) {
        sets[key] = [entry.value[key] as number]
      } else {
        sets[key].push(entry.value[key] as number)
      }
    })
  })

  return {
    labels,
    datasets: Object.keys(sets).map((key, i) => {
      return {
        label: key,
        backgroundColor: colors[i],
        data: sets[key]
      }
    })
  }
})


</script>

<style scoped>

.finance-item-container {
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.finance-item-wrapper {
  max-width: 100%;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.finance-item-wrapper canvas {
  width: 1200px;

  max-width: 100%;
  max-height: 100%;
}

</style>
import { onMounted, ref, type ComputedRef, type Ref } from "vue"
import type { Maybe } from "../model/financeData"
import { useHistory, type HistoricEntry } from "./history"

export type RecurrentData<T> = {
  currentData: Ref<Maybe<T>>
  getHistoryByKey: (key: string) => ComputedRef<HistoricEntry[]>
}

export const useRecurrentData = <T>(makeRequest: any, interval = 30000): RecurrentData<T> => {
  const currentData = ref<Maybe<T>>()
  const { addEntry, getHistoryByEntryName } = useHistory()

  const updateData = async () => {
    const newData = await makeRequest()
    currentData.value = newData
    Object.keys(newData).forEach(key => addEntry(key, {
      time: new Date(),
      value: newData[key]
    }))
  }

  onMounted(async () => {
    updateData()
    setInterval(updateData, interval);
  })

  return { getHistoryByKey: getHistoryByEntryName, currentData }
}
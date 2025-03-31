import { computed, ref } from 'vue';

export type HistoricEntry = {
  time: Date,
  value: {[key: string]: string | number}
}

type HistoricStore = Record<string, HistoricEntry[]>

export const useHistory = () => {
  const history = ref<HistoricStore>({});

  const addEntry = (key: string, entry: HistoricEntry) => {
    if (!history.value[key]) {
      history.value[key] = [];
    }
    history.value[key].push(entry);
    history.value[key].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
  }

  const getHistoryByEntryName = (key: string) => {
    console.log("get")
    return computed(() => history.value[key] || [])
  };

  return { history, addEntry, getHistoryByEntryName };
};

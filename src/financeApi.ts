import axios from "axios"
import type { Bitcoin, Currencies, Stocks, Taxes } from "./models"

const BASE_URL =  import.meta.env.VITE_BASE_URL;

export const getCurrencies = async (): Promise<Currencies | undefined> => {
  try {
    const response = await axios.get(BASE_URL + "/currencies");
    return response.data
  } catch (error) {
    console.error('Error fetching currencies: ', error);
  }
}

export const getStocks = async (): Promise<Stocks | undefined> => {
  try {
    const response = await axios.get(BASE_URL + "/stocks");
    return response.data
  } catch (error) {
    console.error('Error fetching currencies: ', error);
  }
}

export const getBitcoin = async (): Promise<Bitcoin | undefined> => {
  try {
    const response = await axios.get(BASE_URL + "/bitcoin");
    return response.data
  } catch (error) {
    console.error('Error fetching currencies: ', error);
  }
}

export const getTaxes = async (): Promise<Taxes[] | undefined> => {
  try {
    const response = await axios.get(BASE_URL + "/taxes");
    return response.data
  } catch (error) {
    console.error('Error fetching currencies: ', error);
  }
}
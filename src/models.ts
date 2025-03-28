export type Maybe<T> = T | null

export type CurrencyItem = {
  name: String
  buy: Number
  sell: Number
  variation: Number
}

export type Currencies = {
  source: string;
  [key: string]: CurrencyItem | string;
}

export type StockItem = {
  name: String
  location: String
  points: Number
  variation: Number
}

export type Stocks = {
  [key: string]: StockItem
}

export type CurrencyFormat = [String, String]

export type BitcoinItem = {
  name: Number
  format: CurrencyFormat
  last: Number
  buy?: Number
  sell?: Number
  variation: Number
}

export type Bitcoin = {
  [key: string]: BitcoinItem
}

export type Taxes = {
  date: Date	
  cdi: Number
  selic: Number
  daily_factor: Number
  selic_daily: Number
  cdi_dail: Number
}

export type User = {
  username: string
  password: string
}
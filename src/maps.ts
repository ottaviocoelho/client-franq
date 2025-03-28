import type { Bitcoin, Currencies, CurrencyFormat } from "./models"


export const getCurrencyItemsKeys = (currency: Currencies): string[] => {
  return Object.entries(currency)
  .map(([key, value]) => key !== "source" && typeof value === "object" ? key : "")
  .filter((key) => key.length);
}

const formatCurrency = (amount: Number, format: CurrencyFormat): string => {
  let [currency, locale] = format
  return new Intl.NumberFormat(locale.replace("_", "-"), {
    style: 'currency',
    currency: currency as string,
  }).format(amount as number);
};

export const getFormattedBitcoin = (bitcoin: Bitcoin): {[key: string]: string | Number}[] => {
  return Object.values(bitcoin).map((item) => {
    const formattedItem = {
      name: item.name,
      last: formatCurrency(item.last, item.format),
      variation: formatCurrency(item.variation, item.format),
      buy: "-",
      sell: "-"
    };

    if(item.buy) {
      formattedItem.buy = formatCurrency(item.buy, item.format)
    }

    if(item.sell) {
      formattedItem.sell = formatCurrency(item.sell, item.format)
    }
    
    return formattedItem;
  });
}

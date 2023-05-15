export const getCurrency = value => {
  value = Number.isNaN(value) || !value ? 0 : value;

  let formatCurrency = new Intl.NumberFormat("kr-KR", {
    style: "currency",
    currency: "KRW",
  }).format(value);
  formatCurrency = formatCurrency.replace("₩", "");
  return formatCurrency;
};

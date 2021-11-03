export const priceFormater = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export const discount = 0.25;

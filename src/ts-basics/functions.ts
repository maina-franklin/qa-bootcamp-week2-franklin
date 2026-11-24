function calculateTax(income: number, taxYear: number = 2026): number {
  return taxYear < 2026 ? income * 0.1 : income * 0.15;
}
console.log("Tax 2025:", calculateTax(10_000, 2025));
console.log("Tax default:", calculateTax(10_000));

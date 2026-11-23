function kgToLbs(weight: number | string): number {
  return typeof weight === "number" ? weight * 2.2 : parseInt(weight) * 2.2;
}
console.log("From number:", kgToLbs(10));
console.log("From string:", kgToLbs("10kg"));

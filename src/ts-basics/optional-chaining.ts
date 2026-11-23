type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date("2000-05-15") };
}

let customer = getCustomer(1);
console.log("Birth year (id=1):", customer?.birthday?.getFullYear());

let missingCustomer = getCustomer(0);
console.log("Birth year (id=0):", missingCustomer?.birthday?.getFullYear());

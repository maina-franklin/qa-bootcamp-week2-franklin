let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Franklin",
  retire: (date: Date) => {
    console.log("Retiring on:", date.toDateString());
  },
};

console.log("Employee:", employee.id, employee.name);
employee.retire(new Date("2050-01-01"));

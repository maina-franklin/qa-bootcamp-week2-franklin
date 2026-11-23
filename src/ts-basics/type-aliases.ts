type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const qaEngineer: Employee = {
  id: 101,
  name: "Maina",
  retire: (date: Date) => console.log("Retirement date:", date.toISOString()),
};

console.log("QA Engineer:", qaEngineer.id, qaEngineer.name);

interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
}

const poorDeveloper: Developer<{
  heartRate: string;
  stopwatch: boolean;
}> = {
  name: "Poor",
  salary: 20000,
  device: {
    brand: "Samsung",
    model: "Clr25485",
    releasedYear: "2024",
  },
  smartWatch: {
    heartRate: "120",
    stopwatch: true,
  },
};

console.log(poorDeveloper);

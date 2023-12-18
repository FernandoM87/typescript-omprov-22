// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.
interface describeMeasurement {
  day: number;
  price: number;
}

const getRisingStockDays = (stockMeasurements: describeMeasurement[]): describeMeasurement[] =>
  stockMeasurements.filter((data: describeMeasurement) => data.price > 100);

const stockMeasurements: any = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: describeMeasurement[] = getRisingStockDays(stockMeasurements);
console.log(profitableDays);

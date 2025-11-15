// Function
// arrow function , normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

addNormal(2, 2);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(2, 2);

// object => function => method
const poorUer = {
  name: "asif",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUer.addBalance(1000);

// loop function => call back function
const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((elem: number): number => elem * elem);

//? : ternary operator : decision making
// ?? : nullish coalescing operator //null | undefined
//?. : optional chaining

//? : ternary operator : decision making
// if else use
// const userAge = 21;
// const biyerJonnoEligible = (age: number) => {
//   if (userAge >= 21) {
//     console.log("Your Are eligible");
//   } else {
//     console.log("your not eligible");
//   }
// };

// biyerJonnoEligible(20);

// ternary operator
const userAge = 21;
const biyerJonnoEligible = (age: number) => {
  const result = age >= 21 ? "Your Eligible" : "Your not eligible";
  console.log(result);
};

// biyerJonnoEligible(22);

// ?? : nullish coalescing operator

// const userTheme = undefined; work
// const userTheme = null; work
// const userTheme = ""; //not work
const userTheme = "Green theme"; //not work

const selectedTheme = userTheme ?? "Light theme";
// console.log(selectedTheme);

// const isAuthenticated = null; work
const isAuthenticated = ""; //ternary work nullish not work
const resultWIthTernary = isAuthenticated ? isAuthenticated : "Your guest ";

const resultWithNullish = isAuthenticated ?? "Your guest";

console.log({ resultWIthTernary }, { resultWithNullish });

//optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Dhaka",
  },
};

const postalCode = user.address.postalCode;
console.log(postalCode);

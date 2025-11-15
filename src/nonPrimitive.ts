// array, object

// ts-tuple

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push("Mane");

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push("apple", 12);

let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["asif", "wife"];

let nameAndRoll: [string, number] = ["Asif", 79];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

// reference type : object

// user name 3 word
// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "Asif",
//   middleName: "Ali",
//   lastName: "Jihat",
// };

// user name 2 word
// const user: {
//   firstName: string;
//   middleName?: string; //optional type
//   lastName: string;
//   isMarried?: boolean;
//   organization: "Programming Hero"; //value => type define : literal types
// } = {
//   firstName: "Tahirul",
//   lastName: "Islam",
//   isMarried: true,
//   organization: "Programming Hero",
// };

const user: {
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried?: boolean;
  readonly organization: string; //access modifier
} = {
  firstName: "Tahirul",
  lastName: "Islam",
  isMarried: true,
  organization: "Programming Hero",
};

console.log(user);

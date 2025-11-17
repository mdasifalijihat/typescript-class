// dynamically generalize: generic

// not use
// type GenericArray = Array<string>

type GenericArray<T> = Array<T>; //use this

// const friends: string[] = ["mr.x", "mr.Y", "mr.z"];

// Array() constructor
// const friends: Array<string> = ["mr.x", "mr.Y", "mr.z"];
const friends: GenericArray<string> = ["mr.x", "mr.Y", "mr.z"];

// const rollNumbers: number[] = [4, 7, 11];

// Array() constructor
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];

// Array() constructor
const isEligibleList: GenericArray<boolean> = [true, false, true];

//

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

// const userList = [
//   {
//     name: "mr.x ",
//     age: 22,
//   },
//   {
//      name: "mr.Y ",
//     age: 35,
//   }
// ];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "mr.x ",
    age: 22,
  },
  {
    name: "mr.Y ",
    age: 35,
  },
];

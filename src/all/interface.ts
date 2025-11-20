type User = {
  name: string;
  age: number;
};

// interface use only : object type: array, object
// interface IUser {
//   name: string;
//   age: number;
// }

// type Role = {
//   role: "admin" | "user";
// };

// type userWithRole = User & Role;

// const IUser: userWithRole = {
//   name: "Mr, X",
//   age: 25,
//   role: "admin",
// };

type IsAdmin = boolean;

const inAdmin: IsAdmin = false;

// interface use only : object type: array, object
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const IUser: IUserWithRole = {
  name: "Mr, X",
  age: 25,
  role: "admin",
};

// function type alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

// function type interface

interface IAdd {
  (num1: number, num2: number): number;
}
const added: IAdd = (num1, num2) => num1 + num2;
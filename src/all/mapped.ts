// mapped types

// map

const arrayOfNum: number[] = [1, 2, 1, 5, 4, 4];

const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  with: number;
};

// type AreaOfString = {
//   height: string;
//   with: string;
// };

// type AreaOfNumber = {
//   [key in "height" | "with"]: number;
// };

// type AreaOfBool = {
//   [key in "height" | "with"]: boolean;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; with: string }> = {
  height: "false",
  with: "true",
};

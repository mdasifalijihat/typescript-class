// generics function

// normal
// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObject = (value: { id: number; name: string }) => {
//   return [value];
// };

// const arrString = createArrayWithString("apple");
// const arrNum = createArrayWithNumber(222);
// const arrObj = createArrayWithUserObject({
//   id: 123,
//   name: "asif",
// });

// generics function

const createArrayWithGenerics = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGenerics("apple");
const arrNum = createArrayWithGenerics(222);
const arrObj = createArrayWithGenerics({
  id: 123,
  name: "asif",
});

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayWithGenericsMultiple = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayWithGenericsMultiple("asif", false);

const rest2 = createArrayWithGenericsMultiple(222, {
  name: "dhaka",
});

// const addCourse

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "next leverl",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "asif",
  hasPen: true,
};
const student2 = {
  id: 123,
  name: "badol",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student1);
console.log(result);

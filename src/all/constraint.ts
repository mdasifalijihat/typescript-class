// constraint ; strict rules

type Student = {
  name: string;
  id: number;
  DOB: string;
  class: string;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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

const student3 = {
  id: 123,
  name: "mahabub",
  hasWatch: true,
};

const result = addStudentToCourse(student3);
console.log(result);

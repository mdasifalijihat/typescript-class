// type alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mst. ",
    lastName: "Moni",
  },
  gender: "female",
  contactNo: "0185745555",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr. ",
    lastName: "Asif",
  },
  gender: "male",
  contactNo: "01716685584",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

// function type alias use

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

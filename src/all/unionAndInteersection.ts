// Union types are defined using the vertical bar (|) operator to separate the possible types. For example, number | string is a type that can be either a number or a string

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "admin Dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dashboard";
  }
};

getDashboard("admin");

// intersection &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowduryShabeb: EmployeeManager = {
  id: "123",
  name: "Chowdury Shabeb",
  phoneNo: "01547 55555 ",
  designation: "manager",
  teamSize: 20,
};

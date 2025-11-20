//keyof constraint with generics: Generic Type Parameter for the Object: Generic Type Parameter for the Key:extends keyof

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle1 = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user = {
  id: 123, //key:value
  name: "asif",
  address: {
    city: "Dhaka",
  },
};

// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

// console.log(myId, myName, address);

const getPropertyFromObj = <X> (obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "id");
// console.log(result1);

const product = {
  brand: "HP",
};

const result2 = getPropertyFromObj(product, "brand")

console.log(result2)

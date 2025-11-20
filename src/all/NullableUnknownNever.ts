// Nullable Unknown Never type

// nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All user");
  }
};

// getUser("Asif")
// getUser(null);

//Unknown types
const productDiscount = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};

// productDiscount(100);
// productDiscount("100 Taka");
// productDiscount(null);

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error.......");

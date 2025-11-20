//conditional type : je type condition er upor nirvorsheel hoy

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;   //not use

type CheckVehicle <T> = T extends keyof RichPeoplesVehicle ? true : false; //use this

type HasBike = CheckVehicle<"ship">;



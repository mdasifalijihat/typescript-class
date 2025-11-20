let name: string = "asif";

let sms: string = `Hello ${name}, Welcome`;
// console.log(sms);

let home: string = "Dhaka";
let phoneNo: string = "017166-733245";
let love: string = "I don`t love this";

let print: string = `'Home: ${home}, Phone No: ${phoneNo}, Love: ${love}'`;
// console.log(print)

let firstName: string = "Asif";
let lastName: string = "jiht";
let fullName: string = firstName + " " + lastName;
// console.log(fullName)

let lengthOfName = fullName.length;
// console.log(lengthOfName)

// upper case
let upperCase = fullName.toUpperCase();
// console.log(upperCase)

// lower case
let loweCase = fullName.toLowerCase();
// console.log(loweCase)

// find

let findName = fullName.includes("Asif");
// console.log(findName);

let email: string = "asifAliLi@gmail.com";
let phoneEm: string = "014711544874";

let printEmail = email.toLowerCase();
// console.log(printEmail)

let addFull: string = `Email: ${printEmail}, Phone No: ${phoneEm}`;
console.log(addFull);

// object destructuring
// array destructuring

// object destructuring
const user = {
  id: 123,
  name: {
    firstName: "Asif",
    middleName: "Ali",
    lastName: "Jihat",
  },
  gender: "male",
  favoriteColor: "black",
};

//const myFavoriteColor = user.favoriteColor;
//const myMiddleName = user.name.middleName;

const {
  favoriteColor,
  name: { middleName },
} = user;

// name alias
// console.log(favoriteColor, middleName);

// array destructuring

const friends = ["karim", "Rohim", "Mahim", "Osman"];

// const myBestFriend = friends[1]

const [, , myBestFriend] = friends;
console.log(myBestFriend);

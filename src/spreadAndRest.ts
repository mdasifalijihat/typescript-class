// spread operator

const friends = ["Rahim", "Karrim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Mr. Smart", "mr Very Smart"];

// friends.push(...schoolFriends);
// friends.push(...collegeFriends);

// console.log(friends);

// object operator

const user = { name: "asif", phoneNo: "0125422224" };

const otherInfo = { hobby: "outing", favouriteColor: "White" };

const userInfo = { ...user, ...otherInfo };

// console.log(userInfo)

// rest operator
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Send Invitation to ${friend1}`);
// };

// for each 
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send invitation to ${friend}`)
  })
};

sendInvite("pintu", "cintu", "bulbul", "samal");

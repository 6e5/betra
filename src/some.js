// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }

// UserCreator.prototype.increment = function() {
//   const add1 = () => {
//     this.score++;
//   };
//   add1();
// };
// UserCreator.prototype.login = function() {
//   console.log("Login");
// };

// const user1 = new UserCreator("Phil", 4);

// console.log(user1);
// user1.increment();
// console.log(user1.score);

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("Login");
  }
}

const user1 = new UserCreator("Phil", 4);
user1.increment();

console.log(user1);

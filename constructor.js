const studentList = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연",
];

export default function kdt(id, name, age, address, tel) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.address = address;
  this.tel = tel;
}

let i = 1;
let userObject = { user: [] };

function createUser() {
  for (let key in userObject) {
    for (let value of studentList) {
      let number = Math.floor(Math.random() * 35);
      userObject[key].push(new kdt(i, value, number, "undefined", "undefined"));
      i++;
    }
  }

  for (let key of userObject.user) {
    if (key.id % 2 === 1) {
      key.address = "대전";
    }
  }
  kdt.prototype.hello = function () {
    return `이름은 ${this.name}이며 나이는 ${this.age}살 입니다`;
  };
}

createUser();

let filter = userObject.user.filter((elm) => elm.address === "대전");

console.log(filter);
console.log(userObject.user[0].hello());
console.log(userObject.user[1].hello());

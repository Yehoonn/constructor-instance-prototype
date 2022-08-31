// 랜덤으로 숫자를 구한다, 매개변수는 랜덤 숫자의 최대값, 랜덤으로 돌릴 숫자의 개수이다
function randomNumber(random, count) {
  this.number = [];
  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * random);
    if (this.number.indexOf(number) === -1) {
      this.number.push(number);
    } else {
      number = number + 2;
      this.number.push(number);
    }
  }
}

let newRandom = new randomNumber(20, 3);

// 모든 숫자를 더한 값을 3으로 나누고 10미만이라면 under 이상이라면 over를 출력한다
function numberResult(array) {
  let result = 0;
  for (let key of array) {
    result += key;
  }

  result / array.length >= 10 ? console.log("over") : console.log("under");
}

// random 숫자가 있는 배열을 토대로 새로운 객체를 생성, first, second, third라는 key에 배열의 값을 넣어준다
function objectDataCreate(array) {
  let count = 0;
  for (let key of array) {
    if (count === 0) {
      this.first = key;
      count++;
    } else if (count === 1) {
      this.second = key;
      count++;
    } else if (count === 2) {
      this.third = key;
    }
  }
}

// first, second, third 숫자 중 중간 값을 찾아주는 함수
function middleValueSearch(object) {
  if (object.first > object.second && object.third < object.second) {
    return object.second;
  } else if (object.third > object.second && object.first < object.second) {
    return object.second;
  } else if (object.second > object.first && object.third < object.first) {
    return object.first;
  } else if (object.third > object.first && object.second < object.first) {
    return object.first;
  } else if (object.first > object.third && object.second < object.third) {
    return object.third;
  } else if (object.second > object.third && object.first < object.third) {
    return object.third;
  }
}

function answerQuiz() {
  let objectData = new objectDataCreate(newRandom.number);
  let middleData = middleValueSearch(objectData);

  console.log(`랜덤으로 돌린 숫자의 배열은 ↓`);
  console.log(newRandom);
  console.log(`배열을 토대로 만든 객체는 ↓`);
  console.log(objectData);
  console.log(
    `객체의 값을 분석한 결과 중간 값에 해당하는 숫자는 : ${middleData}`
  );
}

answerQuiz();

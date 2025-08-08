/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(a: number, b: number): void;
  sayHi(): void;
}

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("dd");
  },
};

const person1: Person = {
  name: "이정환",
  sayHi: function (a?: number, b?: number) {
    if (typeof a === "number" && typeof b === "number") {
      console.log("a+b : " + (a + b));
    } else {
      console.log("먼가얀");
    }
  },
};

person1.sayHi();
person1.sayHi(1, 2);

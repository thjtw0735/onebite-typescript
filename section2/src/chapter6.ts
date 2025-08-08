// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown 값을 넣을순 있지만 실제 사용시에는 특정타입으로 정제후에 사용가능함.
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
//unknownVar.toUpperCase 안됨
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}

/**
 * Unknown 타입
 */
function unknownExam() {
    var a = 1;
    var b = "hello";
    var c = true;
    var d = null;
    var e = undefined;
    var unknownVar;
    var num = 1;
    unknownVar = num;
    console.log("언논 " + unknownVar);
    //   let str: string = unknownVar;
    //   let bool: boolean = unknownVar;
}
/**
 * Never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    var num = neverFunc();
    var str = neverFunc();
    var bool = neverFunc();
    //   let never1: never = 10;
    //   let never2: never = "string";
    //   let never3: never = true;
}
/**
 * Void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("hi");
    }
    var voidVar = undefined;
}
/**
 * any 타입
 */
function anyExam() {
    var unknownVar;
    var anyVar;
    var undefinedVar;
    var neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}

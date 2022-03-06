// NOTE: This code has not been converted to TypeScript yet
import arrays from "./utilities/arrays.js";
import numbers from "./utilities/numbers.js";
import strings from "./utilities/strings.js";
const numArr: number[] = [3, 4, 5, 6];
const wordArr: string[] = ["cat", "dog", "rabbit", "bird"];
const arrSum: number = arrays.addArr(numArr);
const mixArr: (string | number)[] = arrays.concatArr(numArr, wordArr);
const myNum: any = ("15" as unknown as number) % 2;

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize("the quick brown fox"));
console.log(numbers.multiply("5", 8));
console.log(arrays.lgNum(mixArr));

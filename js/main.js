const main = document.querySelector(".main__box");
const form = document.querySelector(".form");
const main__up = document.querySelector(".main__up");
const main__name = document.querySelector(".input");
// console.log(input);

main__name.addEventListener("click", () => {
  alert("bo'limni toldiring");
});
main__up.addEventListener("click", () => {
  alert("thank you");
});
function toggleShow() {
  main.classList.toggle("show");
}
// {
//     function solution(a, b) {
//   if(a.length>b.length){
//       return `${b}${a}${b}`
//     }else if(b.length>a.length){
//     return `${a}${b}${a}`

//   }
// }
// console.log(solution(`100`,`55`));
// console.log(solution(`44`,`100`));
// console.log(solution(`ul`,`sum`));
// }
// function getAge(inputString) {
//   return +inputString[0];
// }
// console.log(getAge('3 yers old')); // 3
// console.log(getAge('8 yers old'));// 8
// console.log(getAge('yers old 4'));// 4

// function multiply(number) {
//   return number * Math.pow(5, Math.abs(number).toString().length);
// }
// console.log(multiply(200));
// function makeNegative(num) {
//   if (num <= 0) {
//     return num;
//   } else if (num > 0) {
//     return num - (num + num);
//   }
// }
// console.log(makeNegative(-9));
// function evenOrOdd(number) {
//     function evenOrOdd(num) {
//       if (num % 2 === 0) {
//         return "Even";
//       } else {
//         return "Odd";
//       }
//     }
// }
// console.log(evenOrOdd(8));
// function countVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let count = 0;
//     for (let char of str) {

//         if (vowels.has(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// // Test cases
// console.log(countVowels("hello")); // Output: 2 (e, o)
// console.log(countVowels("world")); // Output: 1 (o)
// console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // Output: 5 (a, e, i, o, u)
// console.log(countVowels("")); // Output: 0 (empty string)
// console.log(countVowels("uzbekcha matn")); // Output: 2 (u, e)
// function getCount(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char === "a") {
//       count++;
//     }else if (char === "e") {
//     }else if (char === "i") {
//     }else if (char === "o") {
//     }else if (char === "u") {
//     }
//   }
//   return count;
// }
// console.log(getCount("abrakadabraie"));
// ||||||||||||||||||||||||||||||||||||||||||||||||
// function getCount(str) {
//   return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }
// function solution(number) {
//   if (number <= 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// // Test qilish
// console.log(solution(10)); // Output: 23 (3 + 5 + 6 + 9)
// console.log(solution(20)); // Output: 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)
// console.log(solution(0));  // Output: 0 (son 0 deb belgilangan)
// console.log(solution(-10)); // Output: 0 (manfiy son, 0 qaytaramiz)
// function tribonacci(signature, n) {
//   if (n === 0) {
//     return [];
//   }
//   let result = signature.slice(0, n);
//   for (let i = 3; i < n; i++) {
//     let nextNum = result[i - 1] + result[i - 2] + result[i - 3];
//     result.push(nextNum);
//   }

//   return result;
// }

// // Test cases
// console.log(tribonacci([1, 1, 1], 10)); // Output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
// console.log(tribonacci([0, 0, 1], 10)); // Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
// console.log(tribonacci([0, 1, 1], 10)); // Output: [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
// console.log(tribonacci([1, 2, 3], 10)); // Output: [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
// console.log(tribonacci([1, 1, 1], 0));  // Output: [] (Empty array)
// console.log(tribonacci([1, 1, 1], 1));  // Output: [1]
function XO(str) {
  let xCount = 0;
  let oCount = 0;
  str = str.toLowerCase();
  for (let char of str) {
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }
  return xCount === oCount;
}
function friend(names) {
  let friendNames = [];
  for (let name of names) {
    if (name.length === 4) {
      friendNames.push(name);
    }
  }
  return friendNames;
}

function dost(names) {
  let dostIsmi = [];
  for (let ism of names) {
    if (ism.length === 4) {
      dostIsmi.push(ism);
    }
  }
  return dostIsmi;
}
function validBraces(braces) {
  let stack = [];
  let bracesMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of braces) {
    if (bracesMap[char]) {
      stack.push(char);
    } else {
      let lastOpenBracket = stack.pop();
      if (bracesMap[lastOpenBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

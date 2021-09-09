// //1) To find wether it is perfect palindrome
// function isPalindrome(str) {
//     //Setting Regx (Our Regx the '^' means anything that does not come in the particular ranger)
//     //So anything that is not between a to z or 0 to 9 is accepted or matched
//     let re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// isPalindrome("A man, a plan, a canal. Panama");

// //2) Add binary a and b

// function addBinary(A, B) {
//     //define the sum string and indexes i,j and carry
//     let sum = '';
//     let i = A.length - 1;
//     let j = B.length - 1;
//     let carry = 0;

//     //While loop until and i and j both are empty
//     while (i >= 0 || j >= 0) {
//         //Check values of A and B to be compared
//         let a = A[i] ? A[i] : '0';
//         let b = B[j] ? B[j] : '0';
//         //Sum in every loop
//         //Every time we loop and a and b string which are converted to number to be compared so convery back to string
//         //  sum = a[i]^b[j]^carry + sum;
//         sum = String(a ^ b ^ carry) + sum;
//         //Carry only changes on two occasions
//         if (a === b && a !== String(carry)) {
//             carry = Number(!carry);
//         }
//         i--, j--;
//     }
//     //Check if carry exists
//     if (carry) {
//         sum = String(carry) + sum;
//     }
//     return sum;
// };

// addBinary("1010", "1011");

//3) Count and Say

// function countAndSay(n) {
//     //This is the base case for recursion (Bottom to top approach)
//     if (n === 1) return "1";
//     //Each time we will take the prev value from the last stack call. Ex. for n = 3 we will have prev = solution of n = 2 (11)
//     let prev = countAndSay(n - 1),
//         //count is 1 as if an element of string occur it will occcur atleat once
//         count = 1,
//         //result string
//         res = "",
//         i = 0;
//     //We compare only till prev.length - 1 as we compare second last to last element each time. (As last element + undefined is not a comparison)
//     for (; i < prev.length - 1; i++) {
//         if (prev[i] === prev[i + 1]) {
//             count++;
//         } else {
//             //If i and i + 1 are not equal append to result count + element(prev[index])
//             res += count + prev[i];
//             count = 1;
//         }
//     }
//     //This is for the last element or prev.length - 1 element is appended with count 1 and the element itself.
//     res += count + prev[i];
//     return res;
// }

// countAndSay(4);

//4) Unique character String Note (for in loop is a better solution for of)

//This solution is O(n) space and time
// function firstUniqChar(s) {
//     //use object and solve
//     let char = {};
//     for (let i = 0; i < s.length; i++) {
//         char[s[i]] = s[i] in char ? -1 : i;
//     }
//     //Check if any element does not have an index of -1
//     for (let i in char) {
//         if (char[i] !== -1) {
//             return char[i];
//         }
//     }
//     return -1;
// };

// firstUniqChar("loveleetcode");

// //5) Find common prefix if any

// function longestCommonPrefix(strs) {
//     'use strict';
//     if (strs === undefined || strs.length === 0) {
//         return '';
//     }
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };

// longestCommonPrefix(['flower', 'cow', 'flight', 'flow']);

//6) Reverse words in a string
// With JavaScript methods
// function reverseWords(s) {
//     //We can reduce the spaces by either str.trim() or str.replace([^A-Za-z0-9], '')
//     //But we need a single space so
//     //Remove the initial space
//     s = s.trimLeft();
//     s = s.trimRight();
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === s[i + 1] && s[i] === " ") {
//             s = s.slice(0, i) + s.slice(i + 1);
//             i--;
//         }
//     }
//     //Convert the str to array
//     //IN split function if we leave a space character or $ it will seperate the
//     const str = s.split(' ');
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         let temp = str[j];
//         str[j] = str[i];
//         str[i] = temp;
//     }
//     return str.join(' ');
// };
// console.log(reverseWords("blue is sky the"));

//2) without method

// function reverseWords(str) {
//     //Let us initiate two pointer i and j where
//     let resultString = "";
//     let regex = /[A-z0-9]/;
//     let items = [];
//     let i = str.length - 1;
//     while (i >= 0) {
//         //Increment i everytime there is an empty space
//         if (str[i] === " ") {
//             i--;
//         } else if (regex.test(str[i])) {
//             resultString = resultString + str[i];
//             i--;
//             if (str[i] === " " || str[i] === undefined) {
//                 resultString = reverseString(resultString);
//                 items.push(resultString);
//                 resultString = "";
//             }
//         }
//     }
//     return items.join(' ');
// }

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// reverseWords("the sky is blue");

// // 7) Compare Versions (165) Medium

// function compareVersion(v1, v2) {
//     //We split the string into different element on the basis of 0
//     //as in javaScript 0001 is also 1 and 001 is also 1 we don't have to worry for the preceding 0.
//     let v1Array = v1.split('.');
//     let v2Array = v2.split('.');
//     let length = Math.max(v1Array.length, v2Array.length);

//     for (let i = 0; i < length; i++) {
//         let num1 = parseInt(v1Array[i]) || 0;
//         let num2 = parseInt(v2Array[i]) || 0;
//         if (num1 === num2) {
//             continue;
//         }
//         return num1 > num2 ? 1 : -1;
//     }
//     return 0;
// };

// console.log(compareVersion('1.01', '1.0001'));

// // 8) Longest Palindromic String (5) (DP se hoga)

// const longestPalindrome = s => {
//     //we need to keep track of longest
//     let longest = '';
//     for (let i = 0; i < s.length; i++) {
//         //It is so because in even palindrome the center will be single character
//         let evenPalindromeSubstring = expandFromCenter(s, i, i);
//         //It is so because in odd palindrome the center will have two character
//         let oddPalindromeSubstring = expandFromCenter(s, i - 1, i);

//         if (evenPalindromeSubstring.length > longest.length) {
//             longest = evenPalindromeSubstring;
//         }

//         if (oddPalindromeSubstring.length > longest.length) {
//             longest = oddPalindromeSubstring;
//         }

//     }
//     return longest;
// };

// const expandFromCenter = (str, l, r) => {
//     let i = 0;
//     while (str[l - i] && (str[l - i] === str[r + i])) {
//         i++;
//     }
//     //We decrement i as we want to return valid palindrome
//     i--;
//     return str.slice(l - i, r + 1 + i);
// }

// 9) Longest Substring without Repeating Character (3)

// function longestSubstring(s) {
//     let char = {};
//     let longest = 0;
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         debugger;
//         if (s[i] in char) {
//             let subString = s.slice(i - count, i);
//             let index = subString.indexOf(s[i]);
//             count = count - (index + 1);
//         }
//         count++;
//         char[s[i]] = i;
//         if (longest < count) {
//             longest = count;
//         }
//     }
//     return longest;
// }

// console.log(longestSubstring('abcabcabdbbabcad'));

// 10) Valid anagram

// var isAnagram = function (s, t) {
//     let map = {}

//     debugger;
//     // O(s+t) where s and t are length of strings
//     for (let char of s) {
//         if (!map[char]) {
//             map[char] = 1
//         } else {
//             map[char]++
//         }
//     }

//     for (let char of t) {
//         if (map[char] !== undefined) {
//             map[char]--
//         } else {
//             return false
//         }
//     }

//     for (let value of Object.values(map)) {
//         if (value != 0) {
//             return false
//         }
//     }
//     return true
// };

// isAnagram('nagaram', 'anagram');

// 2nd solution

// var isAnagram = function (s, t) {
//     if (!s.length || !t.length || s.length !== t.length) {
//         return false;
//     }

//     for (let i = 0; i < s.length; i++) {
//         let index = t.indexOf(s[i]);
//         if (index === -1) {
//             return false;
//         }
//         t = t.slice(0, index) + t.slice(index + 1);
//     }
//     if (t.length === 0) {
//         return true;
//     }

// };

// 10) Maximum Number of Occurrences of a Substring (1297)

// 11) Reverse a Integer
// const reverse = x => {
//     const str = x.split('').reverse().join('').replace('-', '');
//     const num = x < 0 ? parseInt(str) * (-1) : parseInt(str);
//     return (num >= (2 ** 31 - 1) || num <= (-(2 ** 31))) ? 0 : num;
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// 11) String to Num (atoi)

// var myAtoi = function (s) {
//     let parseStr = s ? s.trim() : '';
//     let num = parseInt(parseStr) || 0;
//     let constraint = Math.pow(2, 31);
//     if (num > (constraint - 1)) {
//         return constraint - 1;
//     } else if (num < -constraint) {
//         return -constraint;
//     }
//     return num;
// };

// 12) Hamming Distance (leetcode interview)

var hammingDistance = (x, y) => {
  let count = 0;
  while (x > 0 || y > 0) {
    if (x % 2 !== y % 2) {
      count++;
    }
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return count;
};

console.log(hammingDistance(1, 4));

// 13) Invert all the bits

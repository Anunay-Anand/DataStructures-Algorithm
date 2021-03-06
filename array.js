// //Pratising Array Questions

// // 1) Building your own Array
// // Key points :- An array has length property, it has insert(push), delete(pop), delete(anywhere)

// class myArray {
//     constructor() {
//         this.data = {};
//         this.length = 0;
//     }

//     get(index) {
//         return this.data[index];
//     }

//     push(value) {
//         //this is another method to access object property
//         this.data[this.length] = value;
//         this.length++;
//         return this;
//     }

//     pop() {
//         //we need to return the deleted item
//         const lastItem = this.data[this.length - 1];
//         //delete keyword deletes the property (key: value) both of the object
//         delete this.data[this.length - 1];
//         this.length--;
//         return lastItem;
//     }

//     delete(index) {
//         const item = this.data[index];
//         //Shift all items
//         this.shiftItems(index);
//         return item;
//     }

//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         //Now as the last element is no longer needed.
//         //It is copied to previous index
//         delete this.data[this.length - 1];
//         //decrement of length
//         this.length--;
//     }

// }

// // 2) Reverse a string

// function reverseString(str) {
//     //convert it into array
//     const array1 = str.split('');
//     const length = array1.length;
//     //In order to complete this in O(n) time with O(1) space complexity we will use a loop with 2 indexes
//     for (let i = 0, j = length - 1; i <= length / 2, j > length / 2; i++, j--) {
//         let temp = array1[i];
//         array1[i] = array1[j];
//         array1[j] = temp;
//     }
//     //Now return string instead of array
//     str = array1.join('');
//     return str;
// }
// let name = 'My name is Anunay Anand';
// reverseString(name);

// // 3) Merge two Sorted Array

// function mergeArray(array1, array2) {

//     //Check for input
//     if (!array1.length) {
//         return array2;
//     } else if (!array2.length) {
//         return array1;
//     } else {
//         const mergedArray = [];
//         //pop first element of both array for comparison
//         let array1Item = array1[0];
//         let array2Item = array2[0];
//         //i be index of elements
//         let i = 1;
//         let j = 1;
//         //loop constantly over the arrays until both are empty
//         while (array1Item || array2Item) {
//             //undefined is considered as "falsy" in JavaScript
//             // if(3 < undefined or vicerversa it gives undefined)
//             if (array1Item <= array2Item || !array2Item) {
//                 mergedArray.push(array1Item);
//                 array1Item = array1[i];
//                 i++;
//             } else {
//                 mergedArray.push(array2Item);
//                 array2Item = array2[j];
//                 j++;
//             }
//         }
//         return mergedArray;
//     }

// }

// mergeArray([0, 3, 4, 29], [4, 6, 30]);

// Ultra Optimized

// const mergeOptimized = (nums1, m, nums2, n) => {
//   // Check for edge cases
//   if(nums1.length === 0 && nums2.length === 0) {
//       return [];
//   }
//   if(nums1.length === 0 || nums2.length === 0) {
//       return nums1 || nums2;
//   }

//   // Define identifiers required
//   let index1 = m - 1; //nums1
//   let index2 = n - 1; //nums2
//   let index = m + n - 1; //nums

//   // Loop and insert elements in ascending order
//   while(index >= 0) {
//       // Check if element in nums1 is greater than or equal to element in nums2
//       if(nums1[index1] >= nums2[index2] || nums2[index2] === undefined) {
//           nums1[index] = nums1[index1];
//           index1--;
//       } else {
//           nums1[index] = nums2[index2];
//           index2--;
//       }
//       index--;
//   }
//   return nums1;
// };

// // 4) Two Sum

// // var twoSum = function (nums, target) {
// //     const number = [];
// //     for (let i = 0; i < nums.length; i++) {
// //         for (let j = i + 1; j < nums.length; j++) {
// //             if (i != j && nums[i] + nums[j] === target) {
// //                 number.push(i, j);
// //                 return number;
// //             }
// //         }
// //     }
// //     return undefined;
// // };

// //This solution gives a wrong index thus not a solution due to sort
// // var twoSum = function (nums, target) {
// //     //sort the array for better comparison method
// //     const original = nums;
// //     nums.sort((a, b) => a - b);
// //     //run a loop comparing
// //     const length = nums.length;
// //     for(i=0, j = length - 1; i < length - 1, j > 0;) {
// //         if(nums[i] + nums[j] < target) {
// //             i++;
// //         } else if (nums[i] + nums[j] > target) {
// //             j--;
// //         }
// //         else if (nums[i] + nums[j] === target){
// //             return [i,j];
// //         }
// //     }
// //     return undefined;
// // }

// //Faster Solution using hash table in 2 runs O(1) time complexity

// let twoSum = function (nums, target) {
//     // const indices = {};
//     // //We will create an object with keys being the variable and value being index
//     // //We store the index as values as we need to pass them as solution
//     // for (let i = 0; i < nums.length; i++) { //O(n)
//     //     debugger;
//     //     indices[nums[i]] = i;
//     // }

//     // for (let index = 0; index < nums.length; index++) { //O(n)
//     //     let constraint = target - nums[index];
//     //     //Now let us understang it this way constaint + num[index] = target
//     //     //As all elements are already stored as keys
//     //     //Thus contraint if it exists in the object we will take it's index and the sol = [index, indicies[constraint]]
//     //     //the second condition is checked to make sure the element with same index aren't accecpted as soln
//     //     if (indices[constraint] !== undefined && indices[constraint] !== index) {
//     //         return [index, indices[constraint]];
//     //     }
//     // }
//     // const indices = {};
//     // for (let i = 0; i < nums.length; i++) { //O(n)
//     //     indices[nums[i]] = i;
//     // }

//     // for (let index = 0; index < nums.length; index++) { //O(n)
//     //     let constraint = target - nums[index];
//     //     if (constraint in indices && indices[constraint] !== index) {
//     //         return [index, indices[constraint]];
//     //     }
//     // }
// }

// //Fastest solution in single Run

// // let twoSum = function (nums, target) {
// //     const indices = {};
// //     for (let index = 0; index < nums.length; index++) {
// //         let complement = target - nums[index];
// //         //Now check if complement exist
// //         if (complement in indices) {
// //             return [index, indices[complement]]
// //         }
// //         //storing key as array value and index as values
// //         indices[nums[index]] = index;
// //     }
// // }

// twoSum([3, 2, 4, ], 6);

// //5) Maximum Sub Array

// //All we need to return is one sum. So what we need to understand is what is our input
// //what is the expected outcome.
// // const maxSubArray = function (nums) {
// //     let sum = 0;
// //     //We take this as we are given that the array might have -ve digit to 10th position
// //     //This gives us the least number possible
// //     let result = Number.MIN_SAFE_INTEGER;
// //     for (let i = 0; i < nums.length; i++) {
// //         //We add the next element to sum to know if the overall result is +ve
// //         sum += nums[i];
// //         //We select the maximum of sum or result to return
// //         result = Math.max(sum, result);
// //         //If the sum goes below 0 then that sequence is terminated
// //         if(sum < 0) {
// //             sum = 0;
// //         }
// //     }
// //     return result;
// // }

// //recursive solution for the same
// //kadane algorithm
// const maxSubArray = function (nums) {
//     let sum = 0;
//     let index = 0;
//     let result = Number.MIN_SAFE_INTEGER;
//     return comparison(nums, sum, result, index);
// }

// function comparison(nums, sum, result, index) {
//     if (index === nums.length) {
//         return result;
//     }
//     sum += nums[index];
//     result = Math.max(sum, result);
//     sum = sum < 0 ? 0 : sum;
//     index++;
//     return comparison(nums, sum, result, index);
// }

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// // 6) Move Zeroes

// //We needed to maintain the order too it's wrong
// // function moveZeroes(nums) {
// //     for (let i = 0, j = nums.length - 1; i < this.length - 1, j > 0;) {
// //         if (i <= j) {
// //             if (nums[i] === 0 && nums[j] !== 0) {
// //                 let temp = nums[i];
// //                 nums[i] = nums[j];
// //                 nums[j] = temp;
// //                 i++;
// //                 j--;
// //             } else if (nums[i] !== 0 && nums[j] === 0 || nums[i] === 0 && nums[j] === 0) {
// //                 j--;
// //             } else if (nums[i] !== 0 && nums[j] !== 0) {
// //                 i++;
// //             }
// //         } else {
// //             return nums;
// //         }
// //     }
// // }

// //Correct but a very slow solution
// // function moveZeroes(nums) {
// //     //checking for input
// //     if(nums.length <= 1) {
// //         return nums;
// //     }
// //     let i = 0;
// //     let j = 1;
// //     return traverse(i, j, nums);
// // }

// // function traverse(i, j, nums) {
// //     debugger;
// //     if (j < nums.length) {
// //         if (nums[i] === 0 && nums[j] !== 0) {
// //             let temp = nums[i];
// //             nums[i] = nums[j];
// //             nums[j] = temp;
// //             i++;
// //             j++;
// //         } else if (nums[i] === 0 && nums[j] === 0) {
// //             j++;
// //         } else if (nums[i] !== 0 && nums[j] === 0) {
// //             i++;
// //         } else if(nums[i] !== 0 && nums[j] !== 0){
// //             i++;
// //             j++;
// //         }
// //         return traverse(i, j, nums);
// //     } else {
// //         return nums;
// //     }
// // }

// //Fastest Solution

// function moveZeroes(nums) {
//     //checking for input
//     if (nums.length <= 1) {
//         return nums;
//     }
//     let nonZeroPlace = 0;
//     //Run a loop over the array for all non zero elements
//     for (let i = 0; i < nums.length; i++) {
//         //Check for non zero elements
//         if (nums[i] !== 0) {
//             nums[nonZeroPlace] = nums[i];
//             //Increment nonZeroPlace
//             nonZeroPlace++;
//         }
//     }
//     //Now place zero in remaining array
//     for (let i = nonZeroPlace; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// }

// moveZeroes([3, 1, 0, 5, 0, 4]); // 1 0 0 3 12 // 1 3 0 0 12

// //7) Duplicate Element

// function containsDuplicate(nums) {
//     //fill all elements in hash/objects
//     if (nums.length <= 1) {
//         return false;
//     }
//     let elements = {};
//     for (let i = 0; i < nums.length; i++) {
//         //Checking for num[i] in elements
//         if (nums[i] in elements) {
//             return true;
//         }
//         //Storing the array elements as keys and index as value
//         elements[nums[i]] = i;
//     }
//     return false;
// };

// containsDuplicate([1, 2, 3, 4]);

// // 8) Rotate Array (189 Leetcode) Medium

// //Brute Force
// // function rotate(nums, k) {
// //     for (let i = 0; i < k; i++) {
// //         let temp = nums.pop();
// //         nums.unshift(temp);
// //     }
// //     return nums;
// // };

// //OPtimal solution 2 pass
// function rotate(nums, k) {

//   const rotate = (nums, k) => {
//     if(k > nums.length) {
//         k = k%nums.length;
//     }

//     // Copy all elements to extra index (k times)
//     for(let i = nums.length - 1; i >= 0; i--) {
//         nums[k+i] = nums[i];
//     }

//     //Now pop the elements and fill in start index
//     while(k - 1 >= 0) {
//         nums[k - 1] = nums.pop();
//         k--;
//     }
//     return nums;
// };

// rotate([1, 2, 3, 4, 5, 6, 7], 3);

// // 9) Longest Word in String
// function longestString(str) {
//     //Convert it into array
//     // const elements = str.split('');
//     str = str + '$';
//     let longestWord = 0;
//     let word = "";
//     for (let i = 0, j = 0; i, j < str.length; j++) {
//         if (str[j] === " " || str[j] === '$') {
//             if (j - i > longestWord) {
//                 longestWord = j - i;
//                 word = str.slice(i, j);
//             }
//             i = j + 1;
//         }
//     }
//     return word;
// }

// longestString("I a  love Anunay he is a superstar 122212124888");

// // 10) Median of two sorted Arrays

// function findMedianSortedArrays(nums1, nums2) {
//     //Length of two array;
//     let m = nums1.length;
//     let n = nums2.length;
//     let mergedArray = [];
//     //Check for input
//     if (!m && n === 1) {
//         return nums2[0];
//     } else if (!n && m === 1) {
//         return nums1[m - 1];
//     } else {
//         //Create two indexes
//         let i = 0;
//         let j = 0;
//         //Until both of them are empty
//         while (i < m || j < n) {
//             //Conditions are important or the code will break
//             //This if condition was added just because !0 = true as in javascript 0 === false
//             //So if nums2[j] === 0 the code would break
//             if (nums2[j] === 0) {
//                 mergedArray.push(nums2[j]);
//                 j++;
//             } else if ((nums1[i] <= nums2[j] || !nums2[j]) && nums1[i] !== undefined) {
//                 mergedArray.push(nums1[i]);
//                 i++;
//             } else {
//                 mergedArray.push(nums2[j]);
//                 j++;
//             }
//         }
//         //Now find median by mid elements
//         let length = mergedArray.length;
//         let mid1 = mergedArray[Math.floor(length / 2)];
//         let mid2 = mergedArray[Math.floor((length - 1) / 2)];
//         let median = (mid1 + mid2) / 2;
//         return median;
//     }
// }

// findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]);

// // 11) Remove duplicates from an Array

// function removeDuplicates(nums) {
//     //Check for Input
//     if (!nums.length) {
//         return 0;
//     }
//     // 1) length index variable count the unique element
//     // 2) Each time a new element is found our index element is updated
//     // 3) We first copy the unique element at that place
//     let index = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         //As Array is sorted the very next element is compared.
//         //If it is new that element is copied at index
//         //We compare less than length - 1 as we compare last index on the second last step
//         if (nums[i] !== nums[i + 1]) {
//             nums[index] = nums[i + 1];
//             index++;
//         }
//     }
//     return index;
// }

// //Fastest or Optimal solution

// // function removeDuplicates(nums) {
// //         if (!nums.length) {
// //             return 0;
// //         }
// //         let length = 1;
// //         for (let i = 0, j = 1, z = 1; j < nums.length; j++, i++) {
// //             if (nums[i] != nums[j]) {
// //                 length++;
// //                 nums[z] = nums[j];
// //                 z++;
// //             }
// //         }
// //         return length;
// //     }

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// //12) Reverse String Optimum solution 100%

// function reverseString(s) {
//     const len = s.length / 2
//     for (let i = 0, j = s.length - 1; i <= len, j > len; i++, j--) {
//         let temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//     }
//     return s;
// };

// reverseString(["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n",
//     "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"
// ]);

// //13) FizzBuzz

// //     const fizzBuzz = n =>
// // //   Array.from(Array(n), (_, i, x = i + 1) =>
// // //     !(x % 15) ? 'FizzBuzz' : !(x % 5) ? 'Buzz' : !(x % 3) ? 'Fizz' : x.toString())

// // 14) Return Single Number (136)

// //HASH SOLUTION/Object Solution
// // function singleNumber(nums) {
// //     let items = {};
// //     for (let i = 0; i < nums.length; i++) {
// //         if (nums[i] in items) {
// //             delete(items[nums[i]]);
// //         } else {
// //             items[[nums[i]]] = i;
// //         }
// //     }
// //     //Now fetch all object values by ES6 Method
// //     for (let key of Object.keys(items)) {
// //         if (items[key] !== undefined) {
// //             return key;
// //         }

// //     }
// // }

// // Single number single loop solution
// // const singleNumber2 = (nums) => {
// //     let items = {};
// //     for (let i = 0; i < nums.length; i++) {
// //         debugger;
// //         if (nums[i] in items) {
// //             delete items[nums[i]];
// //         } else {
// //             items[nums[i]] = 0;
// //         }
// //     }
// //     return Object.keys(items)[0];
// // };

// //SUPER SOLUTION
// // const singleNumber = (nums) => {
// //     debugger;
// //     return nums.reduce((acc, num) => acc ^ num)
// // };

// // singleNumber([4, 1, 2, 1, 2]);

// //14) Sum of two number without + and - operators

// // function getSum(a, b) {
// //     let sum = 0;
// //     if (a > 0) {
// //         sum = incrementer(a, sum);
// //     } else {
// //         sum = decrementer(a, sum);
// //     }
// //     if (b > 0) {
// //         sum = incrementer(b, sum);
// //     } else {
// //         sum = decrementer(b, sum);
// //     }
// //     return sum;
// // };

// // function incrementer(num, sum) {
// //     for (let i = 0; i < num; i++) {
// //         sum++;
// //     }
// //     return sum;
// // }

// // function decrementer(num, sum) {
// //     for (let i = num; i < 0; i++) {
// //         sum--;
// //     }
// //     return sum;
// // }

// // getSum(-1, 1);

// //15) Third Maximum Number

// function thirdMax(nums) {
//     let max = 0;
//     let items = {};
//     for (let i = 0; i < nums.length; i++) {
//         items[nums[i]] = nums[i];
//     }
//     nums = Object.keys(items);
//     // max = nums.length > 6 ? nums[2] : nums[nums.length - 3];
//     max = nums.length > 6 ? nums[2] : nums.length >= 3 ? nums[nums.length - 3] : nums[nums.length - 1];
//     return max;
// }

// thirdMax([-2147483648, 1, 1])

// //16) Find the duplicate element - 287

// //1st Solution is sort and then compare O(nlogn)

// //2nd fastest solution
// // function findDuplicate(nums) {
// //     let items = {};
// //     for(let i = 0; i < nums.length; i++) {
// //         if(nums[i] in items){
// //             return nums[i];
// //         }
// //         items[nums[i]] = i;
// //     }
// //     return undefined;
// // };

// //3rd solution O(n) time and O(1) space
// const findDuplicate = function (nums) {
//     //define
//     let rabbit = 0;
//     let tortoise = 0;
//     let round1 = true;
//     let round2 = false;

//     //detect
//     while (round1) {
//         if (nums[tortoise] === nums[rabbit] && round2) {
//             tortoise = 0;
//             round1 = false;
//         } else {
//             tortoise = nums[tortoise];
//             rabbit = nums[nums[rabbit]];
//             round2 = true;
//         }
//     }

//     //locate
//     while (round2) {
//         if (nums[tortoise] === nums[rabbit]) return nums[tortoise];
//         tortoise = nums[tortoise];
//         rabbit = nums[rabbit];
//     }
// };

// findDuplicate([1, 2, 3, 2, 4]);

// // 16) Sort Colors

// function sortColors(nums) {
//     //count for each color or num
//     let red = 0;
//     let white = 0;
//     let blue = 0;
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         nums[i] === 0 ? red++ : nums[i] === 1 ? white++ : blue++;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (red !== 0) {
//             nums[i] = 0;
//             red--;
//         } else if (white !== 0) {
//             nums[i] = 1;
//             white--;
//         } else {
//             nums[i] = 2;
//         }
//     }
//     return nums;
// }

// sortColors([2, 0, 2, 1, 1, 0]);

// //17) First missing positive integer

// // 1) The brute force method is to sort and compare the index with array elements O(nlogn) O(n) space
// // 2) Then we can use hash to do it in O(n) space and time

// // function firstMissingPositive(nums) {
// //     let items = {};
// //     let length = 1;
// //     for (let i = 0; i < nums.length; i++) {
// //         //We make sure only +ve number are inserted
// //         if (nums[i] > 0) {
// //             items[[nums[i]]] = i;
// //             length++;
// //         }
// //     }

// //     let j = 1;
// //     while (j <= length) {
// //         if(j in items){
// //             j++;
// //         } else{
// //             return j;
// //         }
// //     }
// // }

// //3 Solution is diving it into partition -ve and +ve
// //Solution not complete
// function firstMissingPositive(nums) {
//     let i = 0;
//     //1st passs for partition
//     for (let j = 0; j < nums.length; j++) {
//         //Swapping numbers
//         if (nums[i] > 0 && nums[j] <= 0) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//         } else if (nums[i] < 0 && nums[j] <= 0 && nums[i] > 0 && nums[j] >= 0) {
//             i++;
//         }
//     }
//     let int = 1;
//     for (i; i <= nums.length; i++) {
//         if (nums[i] === int) {
//             int++;
//         } else {
//             return int;
//         };
//     }
// }

// firstMissingPositive([3, 4, -1, 1]);

// //18) Majority Element // This solution is O(n) space and time
// //NOTE A VERY IMP CONDIIDITON THE MAJORITY ELEMENT 2N times of all other elements
// //SO if all other elements add upto 6 there will be 12 occurence of najority
// // function majorityElement(nums) {
// //     //We will hash in this to store all keys with number of occurence
// //     let items = {};
// //     for(let i = 0; i < nums.length; i++) {
// //         if(nums[i] in items) {
// //             items[nums[i]] = items[nums[i]] + 1;
// //         } else {
// //         items[[nums[i]]] = 1;
// //         }
// //     }

// //     //2nd pass find the max element
// //     let occurence = 0;
// //     let max = 0;
// //     for(let key of Object.keys(items)) {
// //         if(occurence < items[key]) {
// //             max = key;
// //             occurence = items[key];
// //         }
// //     }
// //     return max;
// // }

// //2) Second solution is by using .sort and then n/2 element passsing O(nlogn)O(1)space

// // function majorityElement(nums) {
// //     if(nums.length === 1) {
// //         return nums[0];
// //     }
// //     nums.sort(function(a,b){return a - b});
// //     return nums[Math.floor(nums.length/2)];
// // }

// //3) Using hash in single pass O(n) space and time
// // if(nums.length <= 1) {
// //     return nums[0];
// // }
// // let items = {};
// // let len = nums.length;
// // for(let i = 0; i < len; i++) {
// //    if(nums[i] in items) {
// //    	items[nums[i]] = items[nums[i]] + 1;
// //     if(items[nums[i]] >= len/2) {
// //     	return nums[i];
// //     }
// //    } else {
// //    		items[nums[i]] = 1;
// //    }
// // }

// //4)  Boyer-Moore Vomiting Algorithm it's absolute solution O(n) time O(1) space
// function majorityElement(nums) {
//     let count = 1;
//     let maj = 0;
//     for (let i = 1; i < nums.length; i++) {
//         nums[i] === nums[maj] ? count++ : count--;
//         if (count === 0) {
//             maj = i;
//             count++;
//         }
//     }
//     return nums[maj];
// }

// majorityElement([4, 5, 4]);

// // 19) Max distance to closest person (leetcode 849)

// // const maxDistToClosest = (seats) => {
// //     let first = null;
// //     let last = null;
// //     max = 0;

// //     for (let i = 0; i < seats.length; i++) {
// //         if (seats[i]) {
// //             if (first === null) {
// //                 first = i;
// //             }

// //             if (last !== null) {
// //                 dist = i - last;
// //                 max = Math.max(max, Math.floor(dist / 2));
// //             }
// //             last = i;
// //         }
// //     }

// //     //  If no one is seated at first seat then check
// //     if (seats[0] !== 1) {
// //         max = Math.max(max, first);
// //     }

// //     //  if no one is seated at last then check
// //     if (seats[seats.length - 1] !== 1) {
// //         max = Math.max(max, seats.length - 1 - last);
// //     }
// //     return max;
// // };

// // // 20) Buy and Sell Stock 2
// // let maxProfit = (prices) => {
// //     let profit = 0;
// //     for (let i = 0; i < prices.length; i++) {
// //         if (prices[i] > prices[i - 1]) {
// //             profit += prices[i] - prices[i - 1];
// //         }
// //     }
// //     return profit;
// // }

// // 21) Searching in 2D Array

// //1) solution
// //  const searchMatrix = (matrix, target) => {
// //     for (let i = 0; i < matrix.length; i++) {
// //         for (let j = 0; j < matrix[i].length; j++) {
// //             if (matrix[i][j] === target) {
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // };

// // searchMatrix([
// //     [1, 3]
// // ]);

// O(n) O(1) space

const searchMatrix = (matrix, target) => {
  // declare and initiate identifiers required
  let rows = matrix.length; // m rows
  let cols = matrix[0].length; // n cols
  let i = 0; // first row
  let j = cols - 1; // last col
  // Loop until target is found
  while (i < rows && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    // If the target is greater than current. We will increment row
    else if (matrix[i][j] < target) {
      i++;
    } else if (matrix[i][j] > target) {
      j--;
    }
  }
  return false;
};

// // 22) Valid Sudoku

// // var isValidSudoku = function (board) {
// //     var rows = [],
// //         cols = [],
// //         box = [];
// //     for (let i = 0; i < board.length; i++) {
// //         for (let j = 0; j < board[i].length; j++) {
// //
// //             if (board[i][j] !== ".") {
// //                 if (rows[i] !== undefined && rows[i][board[i][j]] !== undefined) {
// //                     return false;
// //                 }
// //                 if (rows[i] === undefined) {
// //                     rows[i] = {};
// //                 }
// //                 rows[i][board[i][j]] = true;

// //                 if (cols[j] !== undefined && cols[j][board[i][j]] !== undefined) {
// //                     return false;
// //                 }
// //                 if (cols[j] === undefined) {
// //                     cols[j] = {};
// //                 }
// //                 cols[j][board[i][j]] = true;

// //                 let boxIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
// //                 if (box[boxIndex] !== undefined && box[boxIndex][board[i][j]] !== undefined) {
// //                     return false;
// //                 }
// //                 if (box[boxIndex] === undefined) {
// //                     box[boxIndex] = {};
// //                 }
// //                 box[boxIndex][board[i][j]] = true;
// //             }
// //         }
// //     }
// //     return true;
// // };

// // isValidSudoku([
// //     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
// //     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
// //     [".", "9", "8", ".", ".", ".", ".", "6", "."],
// //     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
// //     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
// //     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// //     [".", "6", ".", ".", ".", ".", "2", "8", "."],
// //     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
// //     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// // ]);

// //23) Matrix or Image Rotation

// const rotateMatrix = matrix => {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < i; j++) {
//             // debugger;
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
//     for (let row = 0; row < matrix.length; row++) {
//         matrix[row].reverse();
//     }
//     return matrix;
// };

// rotateMatrix(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]);

// 22) Merge Sorted array different

// var merge = function (nums1, m, nums2, n) {
//   let num1Index = m - 1;
//   let num2Index = n - 1;
//   let Index = m + n - 1;
//   while (num2Index > -1) {
//     if (nums1[num1Index] !== undefined && nums1[num1Index] > nums2[num2Index]) {
//       nums1[Index] = nums1[num1Index];
//       num1Index--;
//     } else {
//       nums1[Index] = nums2[num2Index];
//       num2Index--;
//     }
//     Index--;
//   }
// };

// 23) Find even number digits in array

// Here the last digit 0 is the initial value of acc/prev number
const findNumbers = (nums) => {
  return nums.reduce(
    (acc, val) => (("" + val).length % 2 === 0 ? acc + 1 : acc),
    0
  );
};

//  24) Removing Element in an Array - Brute Force

function removeElement(nums, val) {
  //   Solve for base case
  if (nums[nums.length - 1] === val) {
    nums.pop();
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let index = i;
      // Perform left shift operation
      while (index < nums.length) {
        nums[index] = nums[index + 1];
        // increment the index
        index++;
      }
      // to ensure the very next element is not val
      i--;
      // Reducing the length of array after removing element
      nums.pop();
    }
  }
  //  Returning the value of k
  return nums.length;
}

// Two Pointer

function removeElement(nums, val) {
  // Base condition of the problem
  if (nums[nums.length - 1] === val) {
    nums.pop();
  }
  let index = nums.length - 1;
  let j = index;
  let count = 0;
  while (j >= 0) {
    if (nums[j] === val) {
      let temp = nums[index];
      nums[index] = val;
      nums[j] = temp;
      index--;
      count++;
    }
    j--;
  }
  while (count > 0) {
    nums.pop();
    count--;
  }
}

// Look in the reverse direction (element which are not val)
function removeElement(nums, val) {
  // intital index where elements are allocated
  let k = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
}

// 25) Check if N and it's double Exist

// 1) Brute Force n^2

const checkIfExist = (arr) => {
  // Check for base/edge cases
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }
  return false;
};

// 2) Comparitavly optimized

// const checkIfExist = (arr) => {
//   let map = {};
//   for (let x of arr) {
//     // Inorder to accept the negative number as well
//     if (map[x] > -Infinity) {
//       return true;
//     }
//     map[x / 2] = x;
//     map[x * 2] = x;
//   }
//   return false;
// };

// 26) Valley Problem

var validMountainArray = function (arr) {
  //     Check if length is less than 3
  if (arr.length < 3) {
    return false;
  }

  //     Finding the peak
  var i = 0;
  while (i < arr.length - 1) {
    if (arr[i + 1] <= arr[i]) {
      break;
    }
    i++;
  }

  //     If the array is continuosly inc or dec
  if (i === 0 || i === arr.length - 1) {
    return false;
  }

  //     Ensure it is strictly decreasing
  for (let j = i; j < arr.length - 1; j++) {
    if (arr[j] <= arr[j + 1]) {
      return false;
    }
  }
  return true;
};

// 27) Replace Elements with Greatest Element on Right side

// Burte Force
// const replaceElements = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       arr[i] = -1;
//       break;
//     }
//     let peak = -Infinity;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > peak) {
//         peak = arr[j];
//       }
//       if (j === arr.length - 1) {
//         arr[i] = peak;
//       }
//     }
//   }
//   return arr;
// };

// Optimized approach O(n)

const replaceElements = (arr) => {
  let len = arr.length;
  let max = arr[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    if (temp > max) {
      max = temp;
    }
  }
  arr[len - 1] = -1;
  return arr;
};

// 28) Sort Array by parity

const sortArrayByParity = (nums) => {
  let len = nums.length;
  let pos = len - 1;

  if (len < 1) {
    return nums;
  }

  for (let j = len - 2; j >= 0; j--) {
    if (nums[j] % 2 !== 0 && nums[pos] % 2 === 0) {
      let temp = nums[j];
      nums[j] = nums[pos];
      nums[pos] = temp;
      pos--;
    } else if (nums[pos] % 2 !== 0 && nums[j] % 2 === 0) {
      pos = j;
    }
  }

  return nums;
};

// 29) Heights Checker

var heightChecker = function (heights) {
  // Spread the initial array to avoid mutation
  const expected = [...heights];
  // Sort to get expected heights
  expected.sort((a, b) => a - b);

  // Counting indicies
  let position = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      position++;
    }
  }

  return position;
};

// 30) k largest element in arrays

function kLargest(arr, k) {
  // Let temp array
  let temp = [];
  let min = Infinity;
  // Fill k number of elements and find min
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
    // Check for min
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  // Loop until length from k
  while (k < arr.length) {
    // Check if min
    if (min < arr[k]) {
      let newMin = arr[k];
      // Loop and replace min with k - 1
      for (let i = 0; i < temp.length; i++) {
        // Replacing min with new Value
        if (min === temp[i]) {
          temp[i] = arr[k];
        }
        // Compare to find min
        if (newMin > temp[i]) {
          newMin = temp[i];
        }
      }
      // Finally replace the min with newMin
      min = newMin;
    }
    k++;
  }

  return temp;
}

kLargest([1, 23, 120, 9, 30, 2, 50, -1, 20, 140], 3);

// 31) Buy and Sell Stock - I

const maxProfitOne = (prices) => {
  let min = Infinity;
  let everyDayProfit = 0;
  let overAllProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // To find the best day to buy stock
    if (min > prices[i]) {
      min = prices[i];
    }
    everyDayProfit = prices[i] - min;
    // Check if it is the most profit made
    if (everyDayProfit > overAllProfit) {
      overAllProfit = everyDayProfit;
    }
  }
  return overAllProfit;
};

// 32) Buy and Sell Stock - II

const maxProfitTwo = (prices) => {
  let min = Infinity;
  let currStock = null;
  let flag = false;
  let overAllProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // Check if stock bought
    if (flag) {
      // Check if time to sell
      if (prices[i + 1] < prices[i] || prices[i + 1] === undefined) {
        overAllProfit += prices[i] - currStock;
        min = prices[i];
        flag = false;
        currStock = null;
      }
    } else if (min > prices[i]) {
      // Check if the price is min
      min = prices[i];
      // Check if the right time to buy
      if (prices[i + 1] >= prices[i]) {
        currStock = min;
        flag = true;
      }
    }
  }
  return overAllProfit;
};

// 33) Buy and Sell stock with infinite transaction and fees

// O(n) solution mine (not optimised)

const maxProfitInfiniteFees = (prices, fee) => {
  // Declare and initiate identifiers required
  let min = Infinity;
  let profit = 0;
  let flag = false;
  let stock = null;
  // Loop over all prices
  for (let i = 0; i < prices.length; i++) {
    // If a stock is already bought
    if (flag) {
      // Check if price falling next day && selling today is profitable
      if (
        (prices[i + 1] < prices[i] && prices[i] - stock > fee) ||
        prices[i + 1] === undefined
      ) {
        profit += prices[i] - stock - fee;
        // Turn flag to false and min to curr price[i]
        flag = false;
        min = prices[i];
      }
    } else if (min > prices[i]) {
      min = prices[i];
      // Check if good time to buy stock
      if (prices[i + 1] >= prices[i]) {
        stock = prices[i];
        flag = true;
      }
    }
  }
  return profit;
};

// O(n) optimized and working

const maxProfitInfiniteFee = (prices, fee) => {
  // Declare and initiate identifiers required
  // The old bought state profit.. Amount left after buying
  let obsp = -prices[0];
  // The old sold state profit... Amount left after selling the stock
  let ossp = 0;
  // To handle the new bought and sold state each time
  let nbsp, nssp;
  // Loop for all prices
  for (let i = 1; i < prices.length; i++) {
    // Reinitialize new bought state and sold state
    nbsp = 0;
    nssp = 0;
    // Check if we need to buy
    if (ossp - prices[i] > obsp) {
      nbsp = ossp - prices[i];
    } else {
      nbsp = obsp;
    }

    // Check if we need to sell
    if (obsp + prices[i] - fee > ossp) {
      nssp = prices[i] + obsp - fee;
    } else {
      nssp = ossp;
    }

    // Update both for new cycle
    obsp = nbsp;
    ossp = nssp;
  }
  return ossp;
};

// 34) Buy and Sell Stock only two transaction allowed

// O(n) not optimized solution

const maxProfit = (prices) => {
  // Declare and initiate identifier to be used
  let min = Infinity;
  let profit = 0;
  let currStock = null;
  let profit1 = null;
  let profit2 = null;
  let flag = false;
  // Loop for all prices
  for (let i = 0; i < prices.length; i++) {
    if (flag) {
      // Check if right time to sell
      if (prices[i + 1] < prices[i] || prices[i + 1] === undefined) {
        // Calculate the profit
        profit = prices[i] - currStock;
        // Check if firstMax Profit is null
        if (profit1 === null) {
          profit1 = prices[i] - currStock;
        } else if (profit2 === null) {
          profit2 = prices[i] - currStock;
        } else if (profit1 > profit2) {
          profit2 = profit2 < profit ? profit : profit2;
        } else if (profit2 > profit1) {
          profit1 = profit1 < profit ? profit : profit1;
        }
        flag = false;
        currStock = null;
        min = prices[i];
      }
    } else if (min > prices[i]) {
      // change min
      min = prices[i];
      // Check if the right time to buy
      if (prices[i + 1] >= prices[i]) {
        currStock = min;
        flag = true;
      }
    }
  }
  return profit1 + profit2;
};

// 35) Infinite Transaction + cooldown

const maxProfitCooldown = (prices) => {
  // Declaring the required identifiers for all states
  let obsp = -prices[0];
  let ossp = 0;
  let ocsp = 0;
  // New state to store changed data
  let nbsp, nssp, ncsp;
  // Loop for all prices
  for (let i = 1; i < prices.length; i++) {
    nbsp = 0;
    ncsp = 0;
    nssp = 0;

    // Check for bought state profit
    if (ocsp - prices[i] > obsp) {
      nbsp = ocsp - prices[i];
    } else {
      nbsp = obsp;
    }

    // Check for sold state state profit
    if (obsp + prices[i] > ossp) {
      nssp = obsp + prices[i];
    } else {
      nssp = ossp;
    }

    // Check for cooldown state
    if (ossp > ocsp) {
      ncsp = ossp;
    } else {
      ncsp = ocsp;
    }
    // Storing the values for next transition
    obsp = nbsp;
    ossp = nssp;
    ocsp = ncsp;
  }

  return ossp;
};

// 36) 3 sum

// Brute FOrce solution O(n^3)

const threeSum = (nums) => {
  if (nums.length <= 1) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

// O(nlogn) solution

const threeSumOptimized = (nums) => {
  // Check for edge cases
  if (nums.length <= 1) {
    return [];
  }
  // Sorting all the nums in sequence  O(nlogn)
  nums.sort((a, b) => a - b);
  // Defining identifiers
  let result = [];
  let target, left, right;
  // Looping to solution
  for (let i = 0; i < nums.length; i++) {
    // To avoid same subarrays
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    target = -nums[i];
    left = i + 1;
    right = nums.length - 1;
    // Loop until right is greater than left (i.e only two elements remain)
    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        // To ensure no duplicate pattern are accepted
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        // Increment left and decrement right to find further solutions
        left++;
        right--;
      }
    }
  }
  return result;
};

// 37) Trapping Rainwater

// Brute Force O(n^2) and O(1)

const trap = (height) => {
  // Check for edge cases
  if (height.length <= 1) {
    return 0;
  }
  // Define the identifiers required
  let len = height.length;
  let leftMax;
  let rightMax;
  let water = 0;
  // Loop to find result
  for (let i = 0; i < height.length - 1; i++) {
    // We will start from the first building as 0th building can't store anything
    leftMax = 0;
    rightMax = 0;
    // Find the leftMax
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    // Find the rightMax
    for (let j = i; j < len; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    // Now find the min
    water = water + Math.min(leftMax, rightMax) - height[i];
  }
  return water;
};

// O(n) and O(n)

const trap2 = (height) => {
  // Check for edge cases
  if (height.length <= 1) {
    return 0;
  }
  // Define the identifiers required
  let water = 0;
  // Maintain two arrays to handle the maxLeft and right
  let max = -1;
  let maxLeft = [];
  let maxRight = [];
  // Finding the maxLeft O(n)
  for (let i = 0; i < height.length; i++) {
    // Pushing in max for each index
    if (height[i] > max) {
      max = height[i];
    }
    maxLeft[i] = max;
  }
  max = -1;
  // Finding the maxRIght O(n)
  for (let i = height.length - 1; i >= 0; i--) {
    // Pushing in max for each index
    if (height[i] > max) {
      max = height[i];
    }
    maxRight[i] = max;
  }
  // Find water on each index O(n)
  for (let i = 0; i < height.length; i++) {
    water = water + Math.min(maxLeft[i], maxRight[i]) - height[i];
  }
  return water;
};

// O(n) and O(1)

const trapOptimal = (height) => {
  // Check for edge cases
  if (height.length <= 1) {
    return 0;
  }
  // Define the result and index identifiers
  let index1 = 1;
  let index2 = height.length - 2;
  let water = 0;
  // Maintain two arrays to handle the maxLeft and right
  let left = 0;
  let right = height.length - 1;
  // Loop until maxLeft < maxRight
  while (index1 <= index2) {
    // Check if left is smaller than right
    if (height[left] <= height[right]) {
      // If by any chance height of left wall is smaller than height of index
      if (height[left] < height[index1]) {
        left = index1;
      } else {
        water = water + height[left] - height[index1];
        index1++;
      }
    } else {
      if (height[right] < height[index2]) {
        right = index2;
      } else {
        water = water + height[right] - height[index2];
        index2--;
      }
    }
  }
  return water;
};

// 38) Max absolute Sum

const maxAbsoluteSum = (nums) => {
  // Check for edge case
  if (nums.length === 1) {
    return Math.abs(nums[0]);
  }
  // Define the identifiers
  let min = 0;
  let max = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // This is what we compare everytime
    // The sum with the current element and compare to 0 to ensure it does not go +ve
    min = Math.min(0, nums[i], min + nums[i]);
    max = Math.max(0, nums[i], max + nums[i]);
    res = Math.max(res, Math.abs(max), Math.abs(min));
  }
  return res;
};

// 39) Set Matrix Zeros

// Optimized O(n^2) O(n + m)

const setZeroes = (matrix) => {
  // Defining identifiers
  let row = matrix.length - 1; // m rows
  let col = matrix[0].length - 1; // n cols
  // In order to store row and cols
  let rows = new Set();
  let cols = new Set();
  // Find the 0s location in the array
  for (let i = 0; i <= row; i++) {
    // This loop is for rows
    for (let j = 0; j <= col; j++) {
      // This loop is for cols
      // If a element is 0. Store it's index in respective array keeping track
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // Turning all row element in matrix to 0
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      // Check if the row contains i or cols contain j
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// Ultra Optimized O(1) space

const setZeroesOptimized = (matrix) => {
  // Defining identifiers
  let row = matrix.length - 1; // m rows
  let col = matrix[0].length - 1; // n cols
  // Variable to ensure wether col0 needs to be turned to 0's or not
  let col0 = false;

  // Loop to mark dummy arrays
  for (let i = 0; i <= row; i++) {
    // for m rows
    // Check for col0
    if (matrix[i][0] === 0) col0 = true;
    for (let j = 1; j <= col; j++) {
      // for n rows
      // mark rows and cols
      if (matrix[i][j] === 0) {
        // Marking first col for dummy rows
        matrix[i][0] = 0;
        // Marking first row for dummy cols
        matrix[0][j] = 0;
      }
    }
  }

  // Now fill 0's at right place
  for (let i = row; i >= 0; i--) {
    for (let j = col; j >= 1; j--) {
      // Check the dummy row and col
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    // Check for first col
    if (col0 === true) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

// 40) Merge Overlapping Intervals

// Optimal O(nlogn) O(1)/O(n)

const merge = (intervals) => {
  // Check for edge cases
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort the intervals on the basis of first element. Here a and b are arr.
  intervals.sort((a, b) => a[0] - b[0]);

  // Define identifiers required
  let res = [intervals[0]];

  // Now compare the start and end of elements
  for (let interval of intervals) {
    // The end of last element in res is end1 or e1.
    let e1 = res[res.length - 1][1];
    // These are the start and end of current interval
    let s2 = interval[0];
    let e2 = interval[1];
    // Compare the e1 and s2 and change the end of last interval in result array if true
    if (e1 >= s2) {
      res[res.length - 1][1] = e1 > e2 ? e1 : e2;
    } else {
      res.push(interval);
    }
  }
  return res;
};

// 41) Find the repeating and missing number

// O(n) and O(n) solution (brute)

function findMissingAndRepeating(nums) {
  // Define the identifiers required
  let arr1 = new Array(nums.length + 1).fill(0);
  let duplicate;
  let missing;
  // Loop and update the indexes for number found
  for (let x of nums) {
    arr1[x] = arr1[x] + 1;
  }

  // Now find the missing and repeated number
  for (let i = 1; i < nums.length; i++) {
    if (arr1[i] === 2) {
      duplicate = i;
    }
    if (arr1[i] === 0) {
      missing = i;
    }
  }
  return [duplicate, missing];
}

// 42) Count Inversion + Also print pairs

// Brute Force O(n^2) (O(1) if only counting/ O(n) for pairs)

function countInversions(nums) {
  // Declare and initiate identifiers required
  let count = 0;
  let pairs = [];
  // Loop for each element in order to find pairs
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      // Check if the conditions are satisfied
      if (nums[i] > nums[j] && i < j) {
        pairs.push([nums[i], nums[j]]);
        count++;
      }
    }
  }
  return count;
}

// O(nlogn) O(n) Optimized approach

function mergeSort(arr, l, r) {
  // Define the identifiers required
  let invertCount = 0;
  // Loop and call mergeSort until r > l (r is upperbound and l is lowerbound)
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    // Call mergeSort and split the array into parts
    invertCount = mergeSort(arr, l, mid);
    invertCount += mergeSort(arr, mid + 1, r);
    invertCount += merge(arr, l, mid + 1, r);
  }
  return invertCount;
}

function merge(arr, left, mid, right) {
  //Define identifiers required
  let invertCount = 0;
  let i = left; // starting index of left subArray
  let j = mid; // starting index of right subArray
  let k = left; // starting index of result Array
  // Loop until either pointer goes over bound
  while (i <= mid - 1 && j <= right) {
    // Check if left is smaller
    if (arr[i] <= arr[j]) {
      res[k++] = arr[i++];
    } else {
      res[k++] = arr[j++];
      // Now the rest of element to the right of i index will also form pair
      invertCount += mid - i;
    }
  }
  // Check if right array went overbound thus left array is remaining
  while (i <= mid - 1) {
    arr[k++] = arr[i++];
  }

  // Check if left array went overbound thus right array is remaining
  while (j <= right) {
    arr[k++] = arr[j++];
  }

  // Copy the merged element from the temp array to the original array
  for (let i = left; i <= right; i++) {
    arr[i] = res[i];
  }

  //Now return the count
  return invertCount;
}

// 43) Majority Element 2

// Brute Force O(n(loop) + logn(insertion in object)) O(n)
const majorityElement = (nums) => {
  // check for edge case
  if (nums.length === 1) {
    return nums;
  }

  // Define identifiers required
  let count = {};
  let maj = [];

  // loop to find the maj element
  for (let x of nums) {
    // if x is already as a key.. increment it's value
    if (x in count) {
      count[x] = count[x] + 1;
    } else {
      count[x] = 1;
    }

    // check if majority or highest occurence
    if (count[x] > nums.length / 3) {
      maj.push(x);
      count[x] = -1;
    }
  }
  return maj;
};

// Optimized Solution O(n) O(1)

const majorityElementOptimized = (nums) => {
  // check for edge case
  if (nums.length === 1) {
    return nums;
  }

  // Define identifiers required
  let num1 = -1;
  let num2 = -1;
  let count1 = 0;
  let count2 = 0;
  let maj = [];

  // Now loop to find the two majority items
  for (let x of nums) {
    // check that is num1 equal to current x
    if (num1 === x) {
      count1++;
      // Check that is num2 equal to current x
    } else if (num2 === x) {
      count2++;
      // Now if both not satisfied if i.e count1 = 0. Then let num1 be current x
    } else if (count1 === 0) {
      num1 = x;
      count1 = 1;
      // Now if both not satisfied if i.e count2 = 0. Then let num2 be current x
    } else if (count2 === 0) {
      num2 = x;
      count2 = 1;
      // If no condition satisfied that is num1 exist with count1 > 0 and num2 with count2 > 0 but no match to x
    } else {
      count1--;
      count2--;
    }
  }
  //Reinitiatize counts to 0
  (count1 = 0), (count2 = 0);
  // Now count the occurence of both the majority element if more than 1/3 times
  for (let x of nums) {
    if (x === num1) count1++;
    if (x === num2) count2++;
  }

  //Now check if major or not
  if (count1 > nums.length / 3) maj.push(num1);
  if (count2 > nums.length / 3 && num1 !== num2) maj.push(num2);

  return maj;
};

// 44) Grid Unqiue Paths

// Backtracking Solution

const uniquePaths = (m, n) => {
  // Define identifiers
  let bottom = 0;
  let right = 0;

  // Brute Force: function to findPaths O(2 * (m * n)) and Space O(m - 1 + n - 1)
  function findPaths(bottom, right) {
    // When we reached the bottom right
    if (bottom === m - 1 && right === n - 1) {
      return 1;
    }
    // If we went over bound
    if (bottom >= m || right >= n) {
      return 0;
    }
    return findPaths(bottom + 1, right) + findPaths(bottom, right + 1);
  }

  return findPaths(bottom, right);
};

// Brute Force Variation

const uniquePathsBrute2 = (m, n) => {
  // Define identifiers required
  // Here bottom and right will simply store the sum or incerement when solution is found
  let bottom = 0;
  let right = 0;
  // i and j will recursive index which will help to find solutions
  let i = 0;
  let j = 0;

  // function to findPaths
  function findPaths(i, j, bottom, right) {
    // Check when bottom right is reached (i === m - 1 && i === n - 1)
    if (i === m - 1 && j === n - 1) {
      return 1;
    }
    // In case we went overbound (terminating condition for recursion)
    if (i >= m || j >= n) {
      return 0;
    }
    bottom = findPaths(i + 1, j);
    right = findPaths(i, j + 1);
    return bottom + right;
  }

  return findPaths(i, j, bottom, right);
};

// Optimized using DP

const uniquePathsOptimized = (m, n) => {
  // Define identifiers required
  // Here bottom and right will simply store the sum or incerement when solution is found
  let bottom = 0;
  let right = 0;
  // i and j will recursive index which will help to find solutions
  let i = 0;
  let j = 0;
  // Take a 2D to store condition when solution is found
  let dp = [...Array(m)].map((x) => Array(n).fill(-1));

  // function to findPaths
  function findPaths(i, j, bottom, right) {
    // Check when bottom right is reached (i === m - 1 && i === n - 1)
    if (i === m - 1 && j === n - 1) {
      return 1;
    }
    // In case we went overbound (terminating condition for recursion)
    if (i >= m || j >= n) {
      return 0;
    }
    // Check if already visited
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    // Recursive calls to bottom and right indexes
    bottom = findPaths(i + 1, j);
    right = findPaths(i, j + 1);

    // Store the current sum of bottom and right value in dp
    dp[i][j] = bottom + right;

    return bottom + right;
  }

  return findPaths(i, j, bottom, right);
};

// 45) Reverse Pairs  TC - O( N log N ) + O (N) + O (N) SC - O(N)

// Optimized

const reversePairs = (nums) => {
  // check for edge cases
  if (nums.length === 1) {
    return 0;
  }

  // Declare and initiate identifiers required
  let i = 0; //beginning of array (left)
  let j = nums.length - 1; //ending of array (right)

  // Creating function to mergeSort (split the array)
  function mergeSort(arr, l, r) {
    // define variable to store count revere pairs
    let reversePairs = 0;
    // Check if left and right overlap or not
    if (l < r) {
      let mid = Math.floor((l + r) / 2);
      reversePairs = mergeSort(arr, l, mid);
      reversePairs += mergeSort(arr, mid + 1, r);
      reversePairs += merge(arr, l, mid + 1, r);
    }
    return reversePairs;
  }

  // Function to merge both the array while also checking the pairs
  function merge(arr, left, mid, right) {
    // Define the identifiers required
    let reversePairs = 0;
    let i = left; // Beginning of left Array
    let j = mid; //  Beginning of right Array
    let k = 0; // Beginnig of result array
    let res = new Array(right - left + 1).fill(0);

    // HERE WE ARE COUNTING THE REVERSED PAIRS
    while (i < mid && j <= right) {
      if (arr[i] > 2 * arr[j]) {
        reversePairs += mid - i;
        j++;
      } else {
        i++;
      }
    }

    // ALL THE CODE BELOW IS JUST TO SORT THE ARRAY JUST LIKE WE DO IN MERGE SORT
    i = left;
    j = mid;
    k = 0;

    while (i < mid && j <= right) {
      if (arr[i] > arr[j]) {
        res[k++] = nums[j++];
      } else {
        res[k++] = nums[i++];
      }
    }

    // Now in case the left Array is still not empty
    while (i <= mid - 1) {
      res[k++] = arr[i++];
    }

    // Now in case the right Array is still not empty
    while (j <= right) {
      res[k++] = arr[j++];
    }

    // Now copy all the elements from result to the nums array or parent array
    k = 0;
    while (left <= right) {
      arr[left++] = res[k++];
    }

    // Now return the count of pairs
    return reversePairs;
  }
  return mergeSort(nums, 0, j);
};

// 46) Largest Subarray with sum zero

// Brute Force O(n^2) SC O(1)

function maxLen(arr, n) {
  // Declare and initiate the identifiers required
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
}

// Optimized TC - O(NLogN) and SC - O(N)

function maxLenOptimized(arr, n) {
  // Declare and initiate the identifiers required
  let max = 0;
  let sum = 0;

  // Object to store different summation found. Prefix sums
  let prefixSum = {};

  // Loop to find the answer
  for (let i = 0; i < arr.length; i++) {
    // Find the current sum
    sum += arr[i];
    // Check if the sum === 0
    if (sum === 0) {
      max = i + 1;
    } else {
      if (sum in prefixSum) {
        max = Math.max(max, i - prefixSum[sum]);
      } else {
        prefixSum[sum] = i;
      }
    }
  }
  return max;
}

// 47) Count Numver of Sub arrays with given Xor K

// Brute Force O(N^2)

function findXor(A, B) {
  // Define identifiers required
  let count = 0;
  let currXor;
  for (let i = 0; i < A.length; i++) {
    // initiate sum to be 0
    currXor = 0;
    for (let j = i; j < A.length; j++) {
      currXor ^= A[j];
      // Check if sum === target
      if (currXor === B) {
        count++;
      }
    }
  }
  return count;
}

// Optimized approach TC - O(N) SC - O(N) (unordered map - O(N) ordered - O(nlogn))

function findXorOptimized(A, B) {
  // Declare and initiate Identifiers required
  let count = 0; // to keep track of number of subarray found
  let currXor; // To find Xor for each iteration
  let y = 0; // It is the subarray which when multiplied by k will give XR. (Y === K)
  let freq = {}; // hash map to store all prefix Xor

  // Define an object/hash map to store if new Xor product found
  for (let i = 0; i < A.length; i++) {
    // Find the current Xor
    currXor ^= A[i];
    // Check if current Xor is equal to k
    if (currXor === B) {
      count++;
    }
    // Now find the value of Y subarray
    y = currXor ^ B;
    // Check if y exist.. Existence of y mean there will be k
    if (y in freq) {
      count = count + freq[y];
    }
    // Now simply add currXor in map
    if (currXor in freq) {
      freq[currXor]++;
    } else {
      freq[currXor] = 1;
    }
  }
  return count;
}

// 48) Longest SubString without repeat

// Brute foce TC - O(n^2) SC - O(n)

const lengthOfLongestSubstring = (s) => {
  // Check for edge case
  if (s.length === 1) {
    return 1;
  }
  // Declare and initiate identifiers required
  let maxStr = 0;
  // Loop to find the longest substring
  for (let i = 0; i < s.length; i++) {
    // map to store str in case of repeat
    var map = {};
    for (let j = i; j < s.length; j++) {
      // Check if str in set
      if (s[j] in map) {
        maxStr = Math.max(maxStr, j - i);
        break;
      }
      map[s[j]] = j;
    }
  }
  return maxStr === 0 ? s.length : maxStr;
};

// Optimized solution
// Time Complexity: O( 2*N ) (sometimes left and right both have to travel complete array)
//Space Complexity: O(N) where N is the size of HashSet taken for storing the elements

const lengthOfLongestSubstringOp = function (s) {
  // define the edge case
  if (s.length === 1) {
    return 1;
  }

  // define the identifiers required
  // Pointer to keep track of starting index of maximum non repeating subsequence
  let left = 0;
  // define the set to keep track of elements visited
  let set = new Set();
  // the maxstr length keep track of result
  let maxStr = -Infinity;

  // Loop for all indexes of string
  for (let right = 0; right < s.length; right++) {
    // Check if the element already exist in set
    if (s[right]) {
      // Loop until the set is empty of repeating character
      while (left < right && set[s[right]]) {
        // delete the element of the set
        set.delete(s[left]);
        // increment the left pointer
        left++;
      }
    }
    // insert the curr element on set
    set.add(s[right]);
    // Find the max length
    maxStr = Math.max(maxStr, right - left + 1);
  }
  return maxStr;
};

// Ultra Optimized

const lengthOfLongestSubstringOP = (s) => {
  // define the edge case
  if (s.length <= 1) {
    return s.length;
  }

  // define the identfiers required
  let maxStr = -Infinity;
  // map holds the element and the index where it occured
  let map = new Map();
  // the left pointer
  let left = 0;

  // Loop for all the string characters
  for (let right = 0; right < s.length; right++) {
    // Check if right exist in map
    if (map.has(s[right])) {
      // change the left to the index of left whichever is greater
      left = Math.max(left, map.get(s[right]) + 1);
    }
    // Change the index of element stored in map or create new element
    map.set(s[right], right);
    // find the maxStr length
    maxStr = Math.max(maxStr, right - left + 1);
  }
  return maxStr;
};

// 49) Longest common substring (LCS)

// Brute Force Approach TC - O(N) (if ordered list T(O(nlogn))) SC - O(n)

const longestConsecutive = (nums) => {
  // check for edge cases
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }

  // Let's sort the array in order to get the numbers in sequence
  nums.sort((a, b) => a - b);

  // Define the identifiers required
  let first = 0;
  let second = 1;
  let max = 0;
  let count = 0;

  // Now loop over the entire array nums until first || second goes overbound
  while (first < nums.length && second < nums.length) {
    // Check if the number is in sequence increment count
    if (nums[second] - nums[first] === 1) {
      count++;
    } // if the first and second are same
    else if (nums[second] - nums[first] === 0) {
      count = count;
    } // If not in sequence or repeated count = 0;
    else {
      count = 0;
    }
    // find the max LCS
    max = Math.max(max, count + 1);
    first++;
    second++;
  }
  return max;
};

// GREEDYYYYYY QUESTIONS

// 50) N-Meetings

// TC-O(N+NLOGN+N) SC-O(N)

function maxMeetings(start, end, n) {
  // Define the edge case
  if (n === 1) {
    return 1;
  }

  // Define the identifiers required
  let meetings = []; // We will store all meetings in the array

  // Storing all in meetings
  for (let i = 0; i < start.length; i++) {
    // We are storing in the pattern of start, end, index of meeting
    meetings.push([start[i], end[i], i]);
  }
  // Now we will sort depending upon the end time
  meetings.sort((a, b) => {
    // If by any chance two meetings have same end time
    if (a[1] - b[1] === 0) {
      // we will compare meetinng number
      return a[2] - b[2];
    }
    return a[1] - b[1];
  });

  // Define further identifiers required
  let endLimit = meetings[0][1];
  let output = 1; // no. of meetings that occur
  for (let i = 1; i < meetings.length; i++) {
    // Check if end limit is lower than next meeting start
    if (endLimit < meetings[i][0]) {
      // Inc output and update the endLimit
      output++;
      endLimit = meetings[i][1];
    }
  }
  return output;
}

// 51) Minimum number of Platforms
// Please make sure to ask interviewer the starting time is sorted or not because
// end time will be in correspondence to starting time

function findPlatform(arr, dep, n) {
  // Define the edge case in case only one train arrives
  if (n === 1) {
    return 1;
  }

  // We are going to sort both the arrival and departure time.. This might change the way arrival is in
  // corrospondence. But in the end.. we are more concerned with overall platform occupation in a day
  // First sort the arrival
  arr.sort((a, b) => a - b);
  // Second sort the departure
  dep.sort((a, b) => a - b);

  // Define the identifiers required to solve
  let maxPlatforms = 1; // This will keep track of max platforms occupied in entire day
  let platform = 1; // Keep track of platforms occupied at an instance
  let arrIndex = 1; // Index for the number of trains arriving
  let depIndex = 0; // Index to keep track of number of trains departing

  // Loop until all trains have arrived
  while (arrIndex < n && depIndex < n) {
    // Check if the arrival time is earlier than departed.
    // In such case extra platform required
    if (arr[arrIndex] <= dep[depIndex]) {
      platform++;
      // find the max platforms
      maxPlatforms = Math.max(maxPlatforms, platform);
      // Update the arrival index and wait for next train
      arrIndex++;
    } else {
      platform--;
      // Update the departure index as a train left
      depIndex++;
    }
  }
  return maxPlatforms;
}

// 53) Job sequencing Greedy

function JobScheduling(arr, n) {
  // define the edge cases
  if (n === 1) {
    return arr[0][2];
  }

  // Find the maximum deadline for making job sequence array
  let maxDeadline = 0;
  for (let i = 0; i < n; i++) {
    maxDeadline = Math.max(maxDeadline, arr[i].dead);
  }

  // Define the identifiers required
  let jobProfit = 0; // to caluclate the max profit
  let countJobs = 0;
  let jobs = new Array(maxDeadline + 1).fill(-1); // an array that holds job sequence

  // Sort all the jobs in descending order of profit
  arr.sort((a, b) => b.profit - a.profit);

  // Now loop the entire jobs arr until all jobs checked
  for (let i = 0; i < n; i++) {
    // Now check if the deadline day is empty in array
    for (let j = arr[i].dead; j > 0; j--) {
      // The day is still empty. No Job assigned
      if (jobs[j] === -1) {
        // insert the job Id
        jobs[j] = arr[i].id;
        jobProfit += arr[i].profit;
        countJobs++;
        break;
      }
    }
  }
  let ans = [];
  ans[0] = countJobs;
  ans[1] = jobProfit;
  return ans;
}

// 54) 0/1 Knapsack Problem

//Function to get the maximum total value in the knapsack.
function fractionalKnapsack(W, arr, n) {
  // define the identifiers required to solve
  let maxValue = 0; // The value that can be taken
  let currW = 0; // Calculating the curr weight
  let remainingWeight;

  // Sort the arr in terms of max value
  // Not being 0/1 knapsack we can take items in pieces. Thus finding value to weight ratio
  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);

  // Now find the max value possible
  for (let i = 0; i < arr.length; i++) {
    // Check if current weight is less than total weight available
    if (currW + arr[i].weight <= W) {
      maxValue += arr[i].value;
      currW += arr[i].weight;
    } else {
      // Take the last piece in pieces
      remainingWeight = W - currW;
      maxValue += (arr[i].value / arr[i].weight) * remainingWeight;
      break;
    }
  }
  return maxValue;
}

// 55) Minimum number of Coins TC - O(V) SC - O(1)
// Here V is number of times value is being reduced so in case
// In case the value is something smaller we will have to traverse entire.

function minCoins(coins, V, M) {
  // Define the identifiers required to solve the problem
  let currValue = 0;
  let countCoins = 0; // This will keep track of number of coins counter

  // Loop the entire array of coins to find min coins
  // Make sure the coins are arranged in descending order
  for (let i = 0; i < M; i++) {
    // Check if remaining value is more than the current coin
    while (V >= coins[i]) {
      // Update the value remaining to be returned
      V -= coins[i];
      // increment the coin
      countCoins++;
    }
  }
  return countCoins;
}

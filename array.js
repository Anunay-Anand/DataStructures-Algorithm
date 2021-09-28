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
//     //1st loop to copy array first elements[no of elements = k]
//     for (let i = nums.length - 1; i >= 0; i--) {
//         //Copy the entire array within the array at higher indexes
//         nums[k + i] = nums[i];
//     }
//     //2nd loop now pop the last elements which are extra and insert at top
//     for (let i = k - 1; i >= 0; i--) {
//         let last = nums.pop();
//         nums[i] = last;
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
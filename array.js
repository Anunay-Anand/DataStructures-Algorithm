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

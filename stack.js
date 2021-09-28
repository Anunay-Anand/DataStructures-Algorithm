//Implementing my own stack

//LinkedList Implementation
// class Node {
//     constructor(value) {
//         this.next = null;
//         this.value = value;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.length = 0;
//         this.bottom = null;
//     }

//     peek() {
//         return this.top;
//     }

//     push(value) {
//         //Create new Node
//         const newNode = new Node(value);
//         if (!this.length) {
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             //If there is a element or node we shift current top as next node of newNode
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.top) {
//             return null;
//         } else if (this.length === 1) {
//             this.bottom = null;
//             this.top = null;
//         } else {
//             this.top = this.top.next;
//         }
//         this.length--;
//         return this;
//     }
// }

// const myStack = new Stack();
// myStack.push('google');
// myStack.push('udemy');
// myStack.push('discord');
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

//Implementation using Array

// class Stack {
//     constructor(value) {
//         this.array = [];
//     }

//     peek() {
//         return this.array[this.array.length - 1];
//     }

//     push(value) {
//         return this.array.push(value);
//     }

//     pop() {
//         return this.array.pop();
//     }

//     minStack() {
//         return this.array.reduce((accumulator, num) => {
//             if (num < accumulator) {
//                 return num;
//             }
//             return accumulator;
//         });
//     }
// }

// const myStack = new Stack();
// myStack.push(3);
// myStack.push(2);
// myStack.push(1);
// myStack.push(5);
// myStack.push(4);
// myStack.push('udemy');
// myStack.push('discord');
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.minStack());
// console.log(myStack);

//1) Valid Paranthesis (20)

// function isValid(s) {
//     //Check if the length is odd or 1
//     let check = s.length === 1 || s.length % 2 !== 0 ? false : true;
//     if (check === false) {
//         return false;
//     }

//     //Create hash table with all brackets closing signs
//     //If we get a closing bracket in string we can get the value or opening of bracket to match with stack
//     const brackets = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }

//     for (let i = 0; i < s.length; i++) {
//         const stack = [];
//         let currChar = s[i];
//         let lastChar = stack[stack.length - 1];
//         let delChar = brackets[currChar];

//         if (delChar) {
//             if (delChar === lastChar) {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         } else {
//             stack.push(currChar)
//         }
//     }

//Check for input
//     if (s.length % 2 === 1 || s.length === 1) {
//         return false;
//     }

//     //Create a hash with all brackets closing
//     const brackets = {
//         '}': '{',
//         ')': '(',
//         ']': '['
//     }

//     const stack = [];

//     for (let i = 0; i < s.length; i++) {
//         let currChar = s[i];
//         let lastChar = stack[stack.length - 1];
//         let inBrackets = brackets[currChar];
//         //Check if the current bracket is opening bracket or not.
//         //If it is a closing bracket then we go into if and else and check if stack has it's opening
//         if (inBrackets) {
//             if (inBrackets === lastChar) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         } else {
//             stack.push(currChar);
//         }
//     }
//     //If there are still element in stack it means not completed
//     return !stack.length;
// }

// isValid("((");

// // 2) Postfix to infix and evaluate

// function evaluatePostfix(S) {
//     //Create a regex to check if it's an operand or not
//     let reg = /[0-9]/;
//     let stack = [];
//     for (let i = 0; i < S.length; i++) {
//         //If it is simply an operand push it onto stack
//         if (reg.test(S[i])) {
//             stack.push(S[i]);
//         } else {
//             //Pop the last two expressions entered and add operand in between and evaluate
//             let t1 = parseInt(stack.pop());
//             let t2 = parseInt(stack.pop());
//             //Check the type of operator
//             let result = S[i] === '+' ? t2 + t1 : S[i] === '-' ? t2 - t1 : S[i] === '*' ? t2 * t1 : t2 / t1;
//             stack.push(result);
//         }
//     }
//     let result = stack.pop();
//     if (result === -0) {
//         return 0
//     };
//     return result;
// }

// evaluatePostfix("231*+9-");

// //3) Sorting of Stack

// function sortStack(s) {
//     let temp = [];
//     while (s.length) {
//         let t = s.pop();
//         while (temp && temp[temp.length - 1] > t) {
//             //pop from temporary and push it into input
//             s.push(temp.pop());
//         }
//         temp.push(t);
//     }
//     return temp;
// }

// sortStack([1, 3, 4, 2, 6, 8]);

// //4) Remove K digits (402)

// function removeKdigits(nums, k) {

//     //check for input
//     if (k === nums.length) {
//         return "0"
//     };

//     //Creating a stack for comparison
//     const stack = [];
//     let length = nums.length;
//     //iterating over the nums string
//     for (let i = 0; i < length; i++) {
//         //remove the peak
//         while (stack && k > 0 && stack[stack.length - 1] > nums[i]) {
//             //if the top of the stack is greater than current nums element i.e there was a dip
//             //we pop the top element of stack to flatten the curve
//             stack.pop();
//             k--;
//         }
//         //if stack is empty and nums string item is not 0
//         if (stack || nums[i] !== "0") {
//             stack.push(nums[i]);
//         }
//     }

//     //special condition if no dip arise in the whole nums // 1 2 3 4 5 6 (no dip)
//     //we simply we remove large num from back
//     while (stack && k--) {
//         stack.pop();
//     }

//     /* if we have 0200 we need to remove the leading 0's but the point is the array length
//     should be greater than 1. If we had just 0 there is no point in removing */
//     while (stack[0] === "0" && stack.length > 1) {
//         stack.shift();
//     }

//     return stack.join(' ');

// };

// removeKdigits('101200', 1);

// 5) Next Greater Element

//Solution (1) N^2 and space O(N)
// function nextLargerElement(arr, n) {
//     //create your own stack
//     let stack = [];
//     //loop each element in array once
//     for (let i = 0; i < n; i++) {
//         let j = i + 1;
//         while (j <= n) {
//             if (arr[i] < arr[j]) {
//                 stack.push(arr[j]);
//                 break;
//             } else if (j === n) {
//                 stack.push('-1');
//             }
//             j++;
//         }
//     }
//     return result;
// }

// function nextLargerElement(arr, n) {
// //stack of elements
// let stack = [];
// let arr1 = new Array(n);
// debugger;
// for (let i = n - 1; i >= 0; i--) {
//     //we will pop until we get greater element on top
//     // or our stack gets empty
//     while (stack && stack[stack.length - 1] <= arr[i]) {
//         stack.pop();
//         // If stack gots empty means there
//         // is no element on right which is greater
//         // than the current element.
//         // if not empty then the next greater
//         // element is on top of stack
//         if (stack.length === 0) {
//             arr1[i] = -1;
//         } else {
//             arr1[i] = stack[stack.length - 1];
//         }
//     }
//     stack.push(arr[i]);
// }
// return stack;

//     let stack = [];
//     let arr1 = new Array(n);

//     // Iterating from n-1 to 0
//     for (let i = n - 1; i >= 0; i--) {
//         debugger;
//         // We will pop till we get the
//         // greater element on top or
//         // stack gets empty
//         while (stack &&
//             stack[stack.length - 1] <= arr[i]) {
//             stack.pop();
//         }

//         // If stack gots empty means there
//         // is no element on right which is greater
//         // than the current element.
//         // if not empty then the next greater
//         // element is on top of stack
//         if (stack.length == 0) {
//             arr1[i] = -1;
//         } else {
//             arr1[i] = stack[stack.length - 1];
//         }
//         stack.push(arr[i]);
//     }
//     return arr1;
// }

// console.log(nextLargerElement([11, 13, 21, 3], 4));
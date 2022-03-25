// 1) Bubble Sort

function bubbleSort(arr) {
  // We find the length and run two loops
  const length = arr.length;
  // The first loop is for every element
  for (let i = 0; i < length; i++) {
    // The second loop runs from 0 to length - 1 - i.
    // We decrease it by each in each iteration as we keep on fixing largest element at last
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swapping numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 2) Selection Sort

function selectionSort(nums) {
  // The first loop runs for each element in array
  for (let i = 0; i < nums.length; i++) {
    // We fix the min to be the current starting index
    let min = i;
    // We also store the value to the current index in temp
    let temp = nums[min];
    // Now we loop for the second time and find min index
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        // Replace the index of min with j
        min = j;
      }
    }
    // Now swap it with the start
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}

// 3) Insertion Sort

function insertionSort(nums) {
  // Declare/initiate identifiers required
  let key, prev;
  // The first loop is for each element of the array (start at 1)
  for (let i = 1; i < nums.length; i++) {
    // Now we will store the curr element as a key used for comparison
    key = nums[i];
    // we will also store prev index which will be used for comparison
    prev = i - 1;
    // Loop until prev index >= 0/ exist and key < prev item
    while (prev >= 0 && key < nums[prev]) {
      // If the condition is true store prev item in the next index
      nums[prev + 1] = nums[prev];
      prev--;
    }
    // If no item is greater than key or no item exist
    nums[prev + 1] = key;
  }
  return nums;
}

// 4) Merge Sort

function mergeSort(nums) {
  let len = nums.length;
  // First we will split the nums into pieces
  // It is a recursive solution so we need to define termination.
  // If length is 1 we can't split array anymore
  if (len === 1) {
    return nums;
  }
  // Split the array into parts by finding middle (lowerBound = 0 && upperBound = nums.length)
  let mid = Math.floor(len / 2);
  // Split both array into two halves leftArray and rightArray
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid);
  // We will return recursively leftArray and RightArray
  // While once they are terminated they will be sent to the merge function
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  // Declare and initiate identifiers required
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Breakout of the loop if any is fully traversed
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 5) Invert Count (A form of merge Sort)

function mergeSort(arr, l, r) {
  // Define the identifiers required
  let invertCount = 0;
  // Loop and call mergeSort until r > l (r is upperbound and l is lowerbound)
  if(l < r) {
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
    if(arr[i] <= arr[j]) {
    	res[k++] = arr[i++];
    } else {
    	res[k++] = arr[j++];
      // Now the rest of element to the right of i index will also form pair
      invertCount += mid - i;
    }
  }
  // Check if right array went overbound thus left array is remaining
  while(i <= mid - 1) {
  	arr[k++] = arr[i++];
  }
  
  // Check if left array went overbound thus right array is remaining
  while(j <= right) {
  	arr[k++] = arr[j++];
  }
  
  // Copy the merged element from the temp array to the original array
  for(let i = left; i <= right; i++) {
  	arr[i] = res[i];
  }
  
  //Now return the count
  return invertCount;
}
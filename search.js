// 1) Binary Search

const search = (nums, target) => {
  let initial = 0;
  let final = nums.length - 1;
  let mid;
  while (initial <= final) {
    mid = Math.floor((initial + final) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      initial = mid + 1;
    } else {
      final = mid - 1;
    }
  }
  return -1;
};

// 2) First Bad Version

return function (n) {
  // Here n is total version simply call mid version everytime to check
  let left = 1;
  let right = n;
  let ans = -1;
  let mid;
  while (left <= right) {
    // top quality method to find mid
    mid = Math.floor(left + (right - left) / 2);
    // Even if response is true. We need to check wether it's the first bad version. Thus we keep on iterating
    if (isBadVersion(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

// 3) Search Insert Positiom

var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[mid] < target ? mid + 1 : mid;
};

// 4) Find the nth Root of m

// Brute Force O(n*m) // SC O(1)
function NthRoot(n, m) {
  //define the identifiers required
  let x = 1;
  while (x <= m) {
    if (x ** n === m) {
      return x;
    }
    x++;
  }
  return -1;
}

// Optimized approach for NoN decimal approach
// Tc - O(n*logm) Sc-O(1)
function NthRootOp(n, m) {
  // define the identifiers required
  let low = 0; // start of the range
  let high = m; // end of the range

  // Apply Binary search over the range
  while (low <= high) {
    // find the middle
    let mid = Math.floor(low + high / 2);
    // Check if the nth root of middle is equal to target
    if (Math.pow(mid, n) === m) return mid;
    else if (Math.pow(mid, n) < m) {
      low = mid + 1;
    } else if (Math.pow(mid, n) > m) {
      high = mid - 1;
    }
  }
  return -1;
}

// Optimized approach for decimal
// TC - O(n*log(m * 10^d)) SC - O(1)
// i) We will run for a range of high - low > 10^-6 (for upto 5th decimal place)
// ii) Our range will be changed including mid instead of mid + 1 or nid - 1.
// iii) If mid^n < m then low = mid else high = mid.

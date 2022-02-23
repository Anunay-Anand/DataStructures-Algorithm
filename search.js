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

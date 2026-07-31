
var nextPermutation = function(nums) {
    let pivot = -1;
    
    for(let i = nums.length - 1; i > 0; --i){
        if(nums[i] > nums[i- 1]){
            pivot = i-1;
            break;
        }
    }

    if(pivot == -1){
        let suffix = nums.sort((a, b) => a - b);
    }

   let nextGreaterIdx;

    for(let i = nums.length -1; i  > pivot; i--){
        if(nums[pivot]  < nums[i]){
            nextGreaterIdx = i;
            break;
        }
    }

    // console.log("Next Greater ", nextGreater,  " NextGreaterIDx ", nextGreaterIdx)
    let temp = nums[nextGreaterIdx];
    nums[nextGreaterIdx] = nums[pivot];
    nums[pivot] =  temp;

    let left = pivot + 1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;

};


// let nums = [1,2,3];clear
let nums = [1, 3, 5, 4, 2]

console.log(nextPermutation(nums));


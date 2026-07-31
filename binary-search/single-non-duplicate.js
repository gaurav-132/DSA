var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid;

    while(low <= high){
        mid = Math.floor((low + high) / 2);

        // console.log(`Mid ${mid}`)
        // break;
        if(nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]){
            return nums[mid];
        }


        if(nums[mid] === nums[mid+1]){
            mid  % 2 !== 0 ?  high = mid : low = mid + 1;   
        }else if(nums[mid] === nums[mid - 1]){
            mid  % 2 !== 0 ?  low = mid + 1 : high = mid;   
        }
    }
};


// let nums = [1,1,2,3,3,4,4,8,8];
// let nums = [3,3,7,7,10,11,11];
// let nums = [1,1,2,2,3];
let nums = [1,2,2,3,3];

console.log(singleNonDuplicate(nums));

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid;


    while(low  <= high){

        mid = Math.floor((low + high) / 2)

        console.log(`Low ${low}, High ${high}, Mid ${mid}`)
        console.log(`Current Low ${nums[low]}, Current High ${nums[high]}, Mid ${nums[mid]}`)
        

        if(nums[mid] === target){
            return mid;
        }

        let checkLeftSorted = nums[low] <= nums[mid];
        let checkRightSorted = nums[mid+1] <= nums[high];


        console.log(checkLeftSorted, checkRightSorted)

        if(checkLeftSorted){
            if((nums[low] <= target && nums[mid] >= target)){
                high  = mid - 1;
                // console.log("went to this")
            }else{
                low = mid + 1;
        console.log(`Current Low ${nums[low]}, Current High ${nums[high]}, Mid ${nums[mid]}`)

                // console.log()
            }
        }else if(checkRightSorted){
            if((nums[mid + 1] <= target && nums[high] >= target)){
                low = mid + 1;
            }else{
                high  = mid -1;
            }
        }


    }

    return -1;
};


// let nums = [6,7,0,1,2,4,5];
// let target = 7;

let nums = [1,3];
let target = 3;



console.log(search(nums, target));
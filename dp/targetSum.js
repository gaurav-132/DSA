function exploreExpressions(nums, currentIndex, target, noOfWays){

    if(currentIndex === nums.length - 1) return nums[nums.length -1];
    let noOfWaysByLeft = 0;
    let noOfWaysByRight = 0;

    let sum1 = -nums[currentIndex] + exploreExpressions(nums, currentIndex+1);
    // console.log("Sum 1", sum1, " CurrentIndex ", currentIndex, " Current Element ", -nums[currentIndex]);
    if(sum1 === target) noOfWaysByLeft++;
    let sum2 = nums[currentIndex] + exploreExpressions(nums, currentIndex+1);
    if(sum2 === target) noOfWaysByRight++;

    // console.log("Sum 2", sum2, " CurrentIndex ", currentIndex, " Current Element ", nums[currentIndex]);


    return noOfWaysByLeft + noOfWaysByRight;
}

var findTargetSumWays = function(nums, target) {
    if(nums.length === 1){
        return 1;
    }

    let noOfWays = 0;
    console.log(exploreExpressions(nums, 0, target, noOfWays));

    
    return noOfWays;
};


let nums = [1,1,1,1,1];
let target = 3;


console.log(findTargetSumWays(nums, target));


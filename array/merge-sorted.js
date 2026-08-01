/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let i = m > 0 ? m - 1: nums1.length -1; //
    let j = n - 1;
    let k = m + n - 1;

    while(k >= 0){

        if(nums1[i] > nums2[j]){
            // Checking whether the nums1 current element is greater the nums 2 current element
            nums1[k] = nums1[i];
            i--;
        }else if(nums2[j] > nums1[i]){
            nums1[k] = nums2[j];
            j--;
        }else if(nums2[j] === nums1[i]){
            nums1[k] = nums1[i];
            i--;
        }else if(i < 0){
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }


};

let nums1 = [4,5,6,0,0,0];
let nums2 = [1,2,3];

// let nums1 = [1,2,3,0,0,0];
// let nums2 = [4,5,6];
let m = 3;
let n = 3;

// let nums1 = [0,0,0,0,0];
// let nums2 = [1,2,3,4,5];
// let m = 0;
// let n = 5;

console.log("Before nums1",nums1, " nums2 ",nums2);
merge(nums1,m,nums2,n)
console.log("After",nums1);
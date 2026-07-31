function mergeIntervals(intervals, start, mid, end) {
    let temp = [];

    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        if (intervals[i][0] <= intervals[j][0]) {
            temp.push(intervals[i]);
            i++;
        } else {
            temp.push(intervals[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(intervals[i]);
        i++;
    }

    while (j <= end) {
        temp.push(intervals[j]);
        j++;
    }

    for (let k = 0; k < temp.length; k++) {
        intervals[start + k] = temp[k];
    }
}


function sortIntervals(intervals, start, end) {
    if (start >= end) {
        return;
    }

    const mid = Math.floor((start + end) / 2);

    // console.log({ start, mid, end });

    sortIntervals(intervals, start, mid);
    sortIntervals(intervals, mid + 1, end);

    mergeIntervals(intervals, start, mid, end);
}

var merge = function(intervals) {

    let merged = [];
    let start = 0;
    let end = intervals.length -1;
    
    sortIntervals(intervals, start, end);

    let currentMegredInterval = intervals[0];
    let temp = [];
    let pushFlag = false;

    for(let i = 1; i < intervals.length; i++){
        if(currentMegredInterval[1] >= intervals[i][0] && currentMegredInterval[1] < intervals[i][1]){
            
            currentMegredInterval[1] = intervals[i][1];
        }else if(currentMegredInterval[1] < intervals[i][0]){
            merged.push(currentMegredInterval);
            currentMegredInterval = intervals[i];
        }
    }

    merged.push(currentMegredInterval);

    return merged;
};




// let intervals = [[1,3],[2,6],[8,10],[15,18]];
// let intervals = [[1,4],[4,5]];
// let intervals = [[4,7],[1,4]];
let intervals = [[1,3],[2,6],[3,8]];

console.log(merge(intervals));
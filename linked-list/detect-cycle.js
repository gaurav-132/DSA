import { createCycle, traverseLL } from "./create-ll.js";


var detectCycle = function(head) {
    if(head.next == null) return -1;

    let slow  = head;
    let fast  = head.next;
    let pointer = 1;

    while(fast != slow){
        slow = slow.next;
        fast= fast.next.next;
        pointer++;
    }

    return pointer;
};



let arr = [3,2,0,-4];

let head = createCycle(arr, 1);
console.log(detectCycle(head));
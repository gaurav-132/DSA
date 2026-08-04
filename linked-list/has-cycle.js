import { createCycle } from "./create-ll.js";

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        console.log(slow, fast)

        if(slow === fast){
            return true;
        }
    }

    return false;
};

let arr = [3,2,0,-4];

let head = createCycle(arr, 1);

console.log(hasCycle(head));
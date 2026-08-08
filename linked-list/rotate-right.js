import { createLinkedList } from "./create-ll.js";

var rotateRight = function(head, k) {
    let curr = head;
    let slow = null;
    let fast  = null;
    
    
    for(let i = 0; i < k; i++){
        
        slow = curr;
        fast = curr.next;
        
        while(slow && fast){
            if(fast.next === null){
                slow.next = null; 
                fast.next = curr;
                curr = fast;
            }
            slow = slow.next;
            fast = fast.next;
        }

    }

    return curr;

};

let arr = [1,2,3,4,5]; 
let k = 2;

let head = createLinkedList(arr);

console.log(rotateRight(head, k));
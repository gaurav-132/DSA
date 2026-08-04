import {createLinkedList} from './create-ll.js';

var reverseList = function(head) {

    if(head == null || head.next === null){

        return head;
    }

    let newHead = reverseList(head.next); 


    head.next.next = head;
    head.next = null;
    return newHead;
};

let arr = [1,2,3,4,5]

const head = createLinkedList(arr);

console.log(reverseList(head));
// console.log(head.next.next);
import { createLinkedList } from "./create-ll.js";


var isPalindrome = function(head) {
    let stack = [];
    let top = -1;
    let temp = head;
    
    while(temp != null){
        stack.push(temp.val);
        top += 1;
        temp = temp.next;
    }

    temp = head;

    while(stack.length != 0){
        if(temp.val !== stack[top]){
            return false;
        }

        top -= 1;
        stack.pop();
        temp = temp.next;
    }



    return true;
};



// let arr = [1,2,2,1];
// let arr = [1,2,3,2,1];
// let arr = [1,2];
// let arr = [1,0,0];
// let arr = [1];

let head = createLinkedList(arr);

console.log(isPalindrome(head));
import { createLinkedList } from "./create-ll.js";

var mergeTwoLists = function(list1, list2) {
    let head = null;

    let pointer1 = list1;
    let pointer2 = list2;

    if((pointer1?.val < pointer2?.val || pointer1?.val === pointer2?.val)){
        head = pointer1;
        pointer1 = pointer1.next;
    }else {
        head = pointer2;
        pointer2 = pointer2.next;
    }


    let temp = head;
    
    while(pointer1 !== null  && pointer2 !== null){
        if(pointer1.val < pointer2.val){
            temp.next = pointer1;
            pointer1 = pointer1.next;
        }else{
            temp.next = pointer2;
            pointer2 = pointer2.next;
        }
        temp = temp.next;
    }

    while(pointer1 !== null){
        temp.next = pointer1;
        pointer1 = pointer1.next;
        temp = temp.next;
    }

    while(pointer2 !== null){
        temp.next = pointer2;
        pointer2 = pointer2.next;
        temp = temp.next;
    }

    return head;
};

let  list1 = [1,2,4];
let list2 = [1,3,4];

let head1 = createLinkedList(list1);
let head2 = createLinkedList(list2);

console.log(mergeTwoLists(head1, head2));
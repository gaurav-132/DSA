function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var middleNode = function(head) {
    let length = 0;
    let temp = head;

    while(temp != null){
        length++;
        temp = temp.next;
    }

    
    let mid = Math.floor(length / 2) + 1;
    
    // console.log(mid);

    let count = 1;
    while(count < mid){
        head = head.next;
        count++;
    }


    return head;
};

var middleNode = function(head) {
    let slow = head; 
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const arr = [65, 66, 26, 77, 96, 86, 11, 21, 13, 80];

function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

let head = createLinkedList(arr);


console.log(middleNode(head).val);
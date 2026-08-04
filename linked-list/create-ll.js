export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export  function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}


export function createCycle(arr, cycleIdx) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let curr = head;

    // If cycle starts at head
    let lastRefNode = cycleIdx === 0 ? head : null;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;

        if (i === cycleIdx) {
            lastRefNode = curr;
        }
    }

    // Create the cycle only if cycleIdx is valid
    if (lastRefNode) {
        curr.next = lastRefNode;
    }

    return head;
}


export function traverseLL(head){
    let temp = head;

    while(temp != null){
        console.log(`Current ${temp.val}, Next ${temp.next}`);
        temp = temp.next;
    }
}

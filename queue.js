let collection = [];

// Write the queue functions below.
function Queue() {
    // this.items = {}; 
    // this.headIndex = 0; 
    // this.tailIndex = 0;
    this.head = 0;
    this.tail = 0;
    this.queue = {};
    
}

//this is correct
function print() {
    //add code here
    return collection;
}

function enqueue(element) {
    //add code here
    
}

function dequeue() {
    //add code here
    
}

function front() {
    //add code here
    
}

function size() {
    //add code here
    return this.queue.length;
}

//this is correct
function isEmpty() {
    //add code here
    if(this.tail - this.head == 0){
        return true;
    }
    return false;
}

module.exports = {
    collection,
    Queue,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};
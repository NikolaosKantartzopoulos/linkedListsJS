class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{

  constructor(head = null){
    this.head = head;
  }

  getHead(){
    return this.head;
  } 

  getTail(){
    if (!this.head) {return null};
    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }


  append(value){
    if(!this.head){
      this.head = new Node(value);
      return this;
    }
    let tail = this.getTail();
    tail.next = new Node(value);
    return tail.next;
  }

  size(){
    if (!this.head) return 0;
    let count = 1;
    let pointer = this.head;

    while(pointer.next != null){
      count++;
      pointer = pointer.next;
    }  
    return count;
  }
 
}
console.log("let a = new LinkedList();")
let a = new LinkedList();
console.log("a.append('nik')")
a.append('nik');
console.log("a.append('kos')")
a.append('kos');
console.log("a.append('mel')")
a.append('mel');
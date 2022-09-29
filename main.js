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

  prepend(value){
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    this.head = new Node(value, this.head);
    return this;
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
 
  at(index){
    if(!this.head){return null}
    let pointer = this.head;
    for(let i = 0; i < index; i++){
      pointer = pointer.next;
    }
    return pointer 
  }

  pop(){
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let pointerBeforeTail = this.at(this.size() - 2);
    pointerBeforeTail.next = null;
    return pointerBeforeTail;
  }

  contains(value){
    if (!this.head) return null;
    let pointer = this.head;
    for(let i = 0; i < this.size(); i++){
      if (pointer.value == value) return true;
      pointer = pointer.next;
    }
    return false;
  }

    find(value){
    if (!this.head) return null;
    let pointer = this.head;
    for(let i = 0; i < this.size(); i++){
      if (pointer.value == value) return i;
      pointer = pointer.next;
    }
    return false;
  }
  
  toString(){
    if (!this.head) return 'null';
    let toRet = '';
    let pointer = this.head;
    for(let i = 0; i <= this.size(); i++){
      toRet += `${pointer.value} -> `
      if (pointer.next == null) {
        return toRet += ' null';
      }

      pointer = pointer.next;
    }
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

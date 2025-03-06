interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("용량 꽉참 ㅋ");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);

stack.push("1");
stack.push("2");
stack.push("3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stac2 = new StackImpl<number>(10);

stac2.push(1);
stac2.push(12);
stac2.push(13);

while (stac2.size !== 0) {
  console.log(stac2.pop());
}

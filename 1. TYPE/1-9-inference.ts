{
  // 타입 추론
  let text = "hello";
  text = "hi";
  // text = 2;

  function print(message = "hello") {
    console.log(message);
  }
  print("hello");
  // print(1);

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}

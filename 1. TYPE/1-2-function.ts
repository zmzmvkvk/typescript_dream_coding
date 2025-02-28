{
  // function jsAdd(n1: number, n2: number): number {
  //   return n1 + n2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Steve");
  printName("Jun", undefined);
  // printName("Ellie");
  // printName("Ellie", 0);

  //Default parameter
  function printMessage(message: string = "default Message") {
    console.log(message);
  }
  printMessage();
  //Rest parameter
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}

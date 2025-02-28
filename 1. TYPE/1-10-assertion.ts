{
  // 💥
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; //OMG
  numbers.push(2); // OMG

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
}

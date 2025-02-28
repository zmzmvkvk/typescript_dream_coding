{
  //number
  const num: number = 0.1;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  //undefined
  let name: undefined; //💥이거 안씀

  let age: number | undefined; //보편적으론 null보단 undefined를 더 많이 씀
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; //💥이거 안씀

  let person2: string | null;

  //unknwon 💥이거 안씀
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 💥이거 안씀
  let anything: any = 0;
  anything = "hell0";

  //void 아무것도 리턴하지 않으면 void타입
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💥이거 안씀

  //never return 불가능함.. 보통 error던지던지 while(true)써야 할때 하는데 안쓸듯 ㅋㅋ 💥이거 안씀
  function throwError(message: string): never {
    //message -> server (log);
    throw new Error(message);
  }

  //object
  let obj: object; //💥 이거 안씀
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}

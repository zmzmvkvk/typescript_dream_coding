{
  // Array
  const ftuits: string[] = ["❤", "🧡"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple 대신에 interface, type alias, class로 대체해서 사용하고 💥Tuple 이거 권장 x -> 가독성 떨어짐
  let student: [string, number];
  student = ["name", 123];
  student[0]; // "name"
  student[1]; // 123
  const [name, age] = student; // 이렇게 오브젝트 디스트럭쳐링 해도 되긴함
}

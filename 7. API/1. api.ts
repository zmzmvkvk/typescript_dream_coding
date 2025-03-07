{
  Array;
  [1, 2].map;

  type Student = {
    passed: boolean;
  };

  const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
  const result = students.every((student) => {
    return student.passed;
  }); // 모든 학생들이 true면 true. 하나라도 false면 false로 리턴됨

  // console.log(result);

  class Animal {}
  class Cat extends Animal {
    isCat: boolean = true;
  }
  class Dog extends Animal {
    isDog: boolean = false;
  }

  const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
  }

  console.log(animals.every<Cat>(isCat));
}

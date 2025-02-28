{
  //Enum은 상수들의 집합? 느낌

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // const MONDAY = 0;
  // const TUESDAY = 1;
  // const WENDESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // --------------------------------------------------------------
  //TypeScript
  //typescript에서 Enum을 쓰는것은 지양하고 union타입을 쓰면 좋음..
  // type Days = 'Monday' | 'Tuesday' | 'Wednesday';
  // enum 은 자동으로 숫자가 증가되게 저장됨
  enum Days {
    Monday = 1, // 1로 지정하면 1부터 시작되게 가능, 문자열도 가능하지만 수동적으로 전부 지정해줘야함
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Monday);
  const day = Days.Saturday;
  console.log(day);
}

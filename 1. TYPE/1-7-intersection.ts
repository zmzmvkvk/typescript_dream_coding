{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.score, person.work());
  }

  internWork({
    name: "elli",
    employeeId: 123,
    score: 1,
    work: () => {},
  });
}

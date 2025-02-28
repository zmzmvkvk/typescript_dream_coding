{
  type Text = string;

  const name: Text = "Ellie";
  const address: Text = "어딘가";

  type Num = number;
  const age: Num = 32;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "Jun",
    age: 32,
  };

  // String Literal Types
  type Name = "name";
  let ellieName: Name;

  ellieName = "name";
  // ellieName = "Jun";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
  // const isCat: Boal = false;
}

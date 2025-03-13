{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  interface PositionInterface {
    z: number;
  }

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj3: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }

  type ZpositionType = PositionType & { z: number };

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}

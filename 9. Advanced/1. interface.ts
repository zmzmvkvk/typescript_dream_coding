{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj3: PositionInterface = {
    x: 1,
    y: 1,
  };

  class Pos1 implements PositionType {
    // x: number;
    // y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }
}

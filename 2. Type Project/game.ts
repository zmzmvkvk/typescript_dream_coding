/**
 * Let's make a game 🕹
 */
type Direction = "up" | "down" | "left" | "right";
let position = { x: 0, y: 0 };
const move = (direction: Direction): void => {
  switch (direction) {
    case "up":
      // position.x++;
      position.y++;
      break;
    case "down":
      // position.x++;
      position.y--;
      break;
    case "left":
      position.x--;
      // position.y++;
      break;
    case "right":
      position.x++;
      // position.y++;
      break;

    default:
      break;
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

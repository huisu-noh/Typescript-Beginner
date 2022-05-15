/**
 * Let's make a game 🕹
 */

type Move = 'up' | 'down' | 'left' | 'right';

const position = {
  x: 0,
  y: 0,
};

function move(direction: Move) {
  switch (direction) {
    case 'up':
      return (position.y += 1);
    case 'down':
      return (position.y -= 1);
    case 'left':
      return (position.x -= 1);
    case 'right':
      return (position.x += 1);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

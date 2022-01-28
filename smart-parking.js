const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];
      if (vehicle === 'regular') {
        if (spot === 'R') {
          return [x,y]
        }
      } else if (vehicle === 'small') {
        if (spot === 'R' || spot === 'S') {
          return [x,y]
        }
      } else if (vehicle === 'motorcycle') {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [x,y]
        } 
      }
    }
  }
  return false;
};
 
const spots = [['s', 's', 's', 'S', 'R', 'M'],
              ['s', 'M', 's', 'S', 'r', 'M'],
              ['s', 'M', 's', 'S', 'r', 'm'],
              ['S', 'r', 's', 'm', 'r', 'M'],
              ['S', 'r', 's', 'm', 'r', 'M'],
              ['S', 'r', 'S', 'M', 'M', 'S']];
const vehicle = 'regular'; 
console.log(whereCanIPark, spots, vehicle);

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));
console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));
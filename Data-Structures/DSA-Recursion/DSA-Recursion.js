'use strict';
function countingSheep(num) { //  O(n) liner time
  if(num === 0){
    console.log(`All sheep jumped over the fence`);
    return;
  }
  if(num >= 1){
    console.log(`${num} Another sheep jump over the fence`);
  }

  countingSheep(num - 1);
}

countingSheep(3);


function powerCalculator(num, exponent, product = '')//  O(n) liner time
{
  
  if (exponent < 0)
    return 'exponent should be => 0';
  
  if (exponent === 1)
    return num;
    
  if (product==='')
    product=num;
    
  
  
  return powerCalculator(num*product, exponent-1, product);
   
}

console.log(powerCalculator(2, 10))
function reverseStr(str) //  O(n) liner time
{
  if (str==='')
    return '';
    
  return str[str.length -1]+reverseStr(str.substring(0, str.length - 1)); 
   
}
console.log(reverseStr('hello'))


function reverseStr(str)//  O(n) liner time
{
  if (str==='')
    return '';
    
  return str[str.length -1]+reverseStr(str.substring(0, str.length - 1)); 
   
}
console.log(reverseStr('hello'))


function triangle(n, value = 0, acc = 0)//  O(n) liner time
{
   acc++;

  if (acc===n+1)
    return value;
  
  value=value+(acc);
 
  return triangle(n, value, acc)
   
}
console.log(triangle(5))


function splitter(str, separator)//  O(n) liner time
{
  if (!str.substring(0, 1))
    return '';
    
  if (str.substring(0, 1) != separator)
  {
    return str.substring(0, 1)+splitter(str.substring(1, str.length), separator)
  } else
  {
    return splitter(str.substring(1, str.length), separator)
  }
  return 
}

console.log(splitter('02/20/2020', '/'));


function fib(n, last='', lastlast='', acc='')
{
  
  if (n<1)
    return;
    
  acc++;
  
  if (acc===n+1)
    return last+lastlast;
    
  if(acc===1)
    return fib(n, 0, 1, acc)

  return fib(n, (last+lastlast), last, acc)
    
}

console.log(fib(7));


// thinl this solution is suboptimal

function factors(n, arr = [])//  O(n) liner time
{
  
  var i;
  for (i=2; i<=n; i++)
  {
     if (n%i === 0)
     {
       if (!arr.includes(i))
        arr.push(i);
       factors(n/i, arr);
     }
     
     console.log(i)
     
  
  }
  
  if (!arr.includes(1))
      arr.push(1);
  return arr;
}

console.log(factors(6));


//8 
const smallmaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const directions = {
  u: [-1, 0],
  d: [1, 0],
  l: [0, -1],
  r: [0, 1]
};
//Polynomial time o(n)3
const findRoutes = (maze, position = [0, 0], steps = []) => {
  const [y, x] = position;
  if (maze[y][x] === 'e') {
    console.log(steps);
    return steps;
  }
  const moves = findValidMoves(maze, position); // [0, 1], [1, 0]
  if (moves.length === 0) {
    return [];
  }
  maze[y][x] = '*';

  moves.forEach(move => {
    const [y, x, direction] = move;

    steps.push(direction);
    findRoutes(maze, move, steps);
  });

};
console.log(findRoutes(smallmaze));


function findValidMoves(maze, position) {
  const moves = Object.keys(directions).map(direction => {
    let y = position[0];
    let x = position[1];
    let changeY = directions[direction][0];
    let changeX = directions[direction][1];

    let sumOfY = y + changeY;
    let sumOfX = x + changeX;

    return [sumOfY, sumOfX, direction];
  }).filter(move => {

    let y = move[0];
    let x = move[1];

    if (y < 0 || x < 0 || y >= maze.length || x >= maze[0].length) {
      return false;
    }
    else if (maze[y][x] === '*') {
      return false;
    }
    else {
      return true;
    }

  });
  return moves;
}
// exponental O(2^n)
function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

//Polynomial time O(n)2
function traverseA(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1)
  });
}
//another version of the solution
function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(" ".repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

// 12 logarithmic time
function binaryRep(num) {
    if (num <= 0) {
        return ''
    }
    const binary = Math.floor(num % 2)
    return binaryRep(Math.floor(num / 2)) + binary
}

binaryRep(25) {
    binary = 1
    binaryRep(12) + 1
}
binary = 0
binaryRep(6) + 0
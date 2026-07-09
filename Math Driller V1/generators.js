function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.mathGenerators =  {

"Evaluate Expressions": () => {
  const x = getRandom(2,6);
  const a = getRandom(2, 9);
  const b = getRandom(1, 10);
  return {
    q: `Evaluate ${a}x + ${b} when x = ${x}`,
    a: `${a * x + b}`
  };
},

"Distributive Property": () => {
  const a = getRandom(2, 5); 
  const b = getRandom(2, 6); 
  const c = getRandom(1, 9);
  return {
    q: `Expand: ${a}(${b}x + ${c})`,
    a: `${a * b}x + ${a * c}`
  };
},

"Combine Like Terms": () => {
const a = getRandom(2, 7);
const b = getRandom(1, 9);
const c = getRandom(2, 6);
const d = getRandom(1, 9);
return {
  q: `Simplify: ${a}x + ${b} + ${c}x - ${d}`,
  a: `${a + c}x + ${b - d}`
};
},

"One-Step Equations": () => {
  const x = getRandom(2, 12);
  const a =getRandom(2, 9);
  const b = a * x;
  return {
      q: `Solve for x: ${a}x = ${b}`,
      a: `x = ${x}`
  };
},

"Two-Step Equations": () => {
  const x = getRandom(2, 10);
  const a = getRandom(2, 8);
  const b = getRandom(1, 10);
  const c = a * x + b;
  return {
    q: `Solve for x: ${a}x + ${b} = ${c}`,
    a: `x = ${x}`
  };
}

};
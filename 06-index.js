const State = require("crocks/State");
const Pair = require("crocks/Pair");
const { get, modify } = State;
const constant = require("crocks/combinators/constant");

const { add, inc } = require("./helpers");

// State s a
// State.of :: a -> State s a
// chain :: State s a ~> (a -> State s b) -> State s b

// addState :: Number -> State s a
const addState = n => get(add(n));

// incState :: Number -> State Number
const incState = n =>
  modify(inc)
    .map(constant(n));

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .map(add(2));
    
console.log(
  compute(10)
    .evalWith(5),
  compute(10)
    .execWith(5)
);

// compute2 :: Number -> State Number
const compute2 = n =>
  State.of(n)
    .chain(x => get(add(x)));

console.log(
  compute2(10)
    .evalWith(5),
  compute2(10)
    .execWith(5)
);

// compute3 :: Number -> State Number
const compute3 = n =>
  State.of(n)
    .chain(addState)
    .chain(incState)
    .chain(addState);

console.log(
  compute3(10)
    .evalWith(5),
  compute3(10)
    .execWith(5)
);

console.log(
  compute3(10)
    .runWith(2)
);
const State = require("crocks/State");
const liftA2 = require("crocks/helpers/liftA2");
const { get } = State;

const { getWord, nameify } = require("./helpers");

// getFirst :: State String
const getFirst = get(getWord(0));

// getLast :: State String
const getLast = get(getWord(1));

// ap : State s (a -> b) ~> State a -> State b
// State.of :: a -> State s a

// format :: State String
const format = getFirst
  .chain(f => getLast.map(nameify(f)));

console.log(
  format
    .evalWith("Jorge Cortes")
);

// format2 :: State String
const format2 =
  State.of(nameify)
    .ap(getFirst)
    .ap(getLast);

console.log(
  format2
    .evalWith("Jorge Cortes")
);

// format3 :: State String
const format3 =
  getFirst
    .map(nameify)
    .ap(getLast);

console.log(
  format3
    .evalWith("Jorge Cortes")
);

// format4 :: State String
const format4 = liftA2(nameify, getFirst, getLast);

console.log(
  format4
    .evalWith("Jorge Cortes")
);
const State = require("crocks/State");
const Pair = require("crocks/Pair");

// State s a
// (s -> (a, s))

// m :: State Number String
const m = State(state => Pair("value", state));

console.log(m, m.runWith(45));
console.log(m.runWith(45).fst(), m.runWith(45).snd());

// n :: State Number
const n = State(state => Pair(state + 5, state));
console.log(n.runWith(45).fst(), n.runWith(45).snd());

// updateValue :: Number -> State Number
const updateValue = x => State(s => Pair(s + x, s));

console.log(
  updateValue(10).runWith(45).fst(),
  updateValue(10).runWith(45).snd()
);

// updateState :: Number -> State Number
const updateState = x => State(s => Pair(s, s + x));

console.log(
  updateState(10).runWith(45).fst(),
  updateState(10).runWith(45).snd()
);
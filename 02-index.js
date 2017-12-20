const State = require("crocks/State");
const Pair = require("crocks/Pair");
const compose = require("crocks/helpers/compose");
const { add, pluralize } = require("./helpers");

// mskeAwesome
const makeAwesome = pluralize("Awesome", "Awesomes");

const flow = compose(makeAwesome, add(10));

// State s a
// (s -> (a, s))

// getState :: () -> State s
const getState = () => State(s => Pair(s, s));

console.log(
  getState()
    // map :: State s a ~> (a -> b) -> State s b
    .map(flow)
    .runWith(23)
);

console.log(
  getState()
    .map(flow)
    .runWith(0)
);
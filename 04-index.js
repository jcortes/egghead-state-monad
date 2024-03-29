const State = require("crocks/State");
const Pair = require("crocks/Pair");
const Unit = require("crocks/Unit");
const { put } = require("crocks/State");

// State s a
// (s -> (a, s))

// putState :: s -> State s ()
const putState = state =>
  State(() => Pair(Unit(), state));

// reset :: () -> State String ()
const reset = () => putState("Grand Canyon");
const reset2 = () => put("Grand Canyon");


console.log(
  putState("Grand Canyon")
    .runWith("Evergreen"),
  putState("Grand Canyon")
    .execWith("Evergreen")
);

console.log(
  reset().execWith("Evergreen")
);

console.log(
  reset2().runWith("Evergreen")
);
const State = require("crocks/State");
const Pair = require("crocks/Pair");
const Unit = require("crocks/Unit");
const mapProps = require("crocks/helpers/mapProps");
const { modify } = require("crocks/State");

const { add } = require("./helpers");

// State s a
// (s -> (a, s))

const state = { bubbles: 42 };

// modifyState :: (s -> s) -> State s ()
const modifyState = fn =>
  State(s => Pair(Unit(), fn(s)));

// blowBubbles :: Number -> State Object ()
const blowBubbles = n =>
  modify(mapProps({ bubbles: add(n) }));

// blowBubble :: () -> State Object ()
const blowBubble = () => blowBubbles(1);

// burstBubbles :: Number -> State Object ()
const burstBubbles = n => blowBubbles(-(n));

// burstBubble :: () -> State Object ()
const burstBubble = () => burstBubbles(1);

console.log(
  modifyState(mapProps({ bubbles: add(1) }))
    .execWith(state)
);

console.log(
  blowBubble()
    .evalWith(state),
  blowBubble()
    .execWith(state)
);

console.log(
  burstBubble()
    .evalWith(state),
  burstBubble()
    .execWith(state)
);
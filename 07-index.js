const State = require("crocks/State");
const composeK = require("crocks/helpers/composeK");

// chain :: State m a ~> (a -> State s b) -> State s b
// (State s) m => a -> m b

const {
  addState,
  incState,
  multiplyState
} = require("./helpers");

// addAndInc :: Number -> State Number
const addAndInc = composeK(incState, addState);

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .chain(addState)
    .chain(incState)
    .chain(multiplyState);

console.log(
  compute(10)
    .runWith(2)
);

// compute2 :: Number -> State Number
const compute2 = n =>
  State.of(n)
    .chain(addAndInc)
    .chain(multiplyState);

console.log(
  compute2(10)
    .runWith(2)
);

// compute3 :: Number -> State Number
const compute3 = n =>
    addAndInc(n)
      .chain(multiplyState);

console.log(
  compute3(10)
    .runWith(2)
);

// compute4 :: Number -> State Number
const compute4 =  composeK(multiplyState, addAndInc);

console.log(
  compute4(10)
    .runWith(2)
);
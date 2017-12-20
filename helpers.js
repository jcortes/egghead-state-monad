const { get, modify } = require("crocks/State");
const constant = require("crocks/combinators/constant");
const compose = require('crocks/helpers/compose');
const curry = require('crocks/helpers/curry');
const option = require('crocks/pointfree/option');
const prop = require('crocks/Maybe/prop');

// add :: Number -> Number -> Number
const add = x => y => x + y;

// inc :: Number -> Number
const inc = add(1);

// multiply :: Number -> Number -> Number
const multiply = x => y => x * y;

// pluralize :: (String, String) -> Number -> String
const pluralize =
  (single, plural) => num =>
    `${num} ${Math.abs(num) === 1 ? single : plural}`;

// addState :: Number -> State Number
const addState = n => get(add(n));

// incState :: Number -> State Number
const incState = n =>
  modify(inc)
    .map(constant(n));
  
// multiplyState :: Number -> State Number
const multiplyState = n => get(multiply(n));

// getWord :: Number -> String -> String
const getWord = idx => word => word.split(" ")[idx] || "";

// nameify :: String -> String -> String
const nameify = first => last => `${last}, ${first}`;

// joinWords :: String -> String -> String
const joinWords = curry(
  (x, y) => `${x} ${y}`
);

// propOr :: (String, a) -> Object -> b
const propOr = (key, def) =>
  compose(option(def), prop(key));

module.exports = {
  add,
  inc,
  pluralize,
  addState,
  incState,
  multiplyState,
  getWord,
  nameify,
  joinWords,
  propOr
};

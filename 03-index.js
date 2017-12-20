const { get } = require("crocks/State");
const prop = require("crocks/Maybe/prop");
const option = require("crocks/pointfree/option");
const compose = require("crocks/helpers/compose");
const objOf = require("crocks/helpers/objOf");

const { burgers, tacos } = require("./data");

// State s a
// (s -> (a, s))

// defaultProp :: (String, a) -> Object -> b
const defaultProp = (key, def) => compose(option(def), prop(key))

// getBurgers :: State Object (Maybe a)
const getBurgers = get(defaultProp("burgers", 0));

// burgersToTacos :: State Object
const burgersToTacos = getBurgers.map(objOf("tacos"))

console.log(
  getBurgers
    .runWith(burgers)
    .fst(),
  getBurgers
    .runWith(burgers)
    .snd()
);

console.log(
  getBurgers
    .evalWith(burgers)
);

console.log(
  getBurgers
    .runWith(tacos)
    .fst(),
  getBurgers
    .runWith(tacos)
    .snd()
);

console.log(
  getBurgers
    .evalWith(tacos)
);

console.log(
  burgersToTacos
    .evalWith(tacos)
);

console.log(
  burgersToTacos
    .evalWith(burgers)
);
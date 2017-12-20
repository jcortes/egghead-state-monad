const {
  updateFirstName
} = require("./model");

const user = {
  firstName: "Jorge",
  lastName: "Cortes",
  fullName: "Jorge Cortes"
};

console.log(
  updateFirstName("Luisa")
    .execWith(user)
);
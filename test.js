const permutatator = require("./permutator");

try {
  const permutations = permutatator.generatePermutations({
    pilot: ["Han Solo", "Lando Calrissian"],
    copilot: ["Chewbacca", "Rey"],
    ship: "Falcon",
    speed: "1.5c"
  });

  console.log(JSON.stringify(permutations, null, 2));
}
catch (error) {
  console.error(error);
}

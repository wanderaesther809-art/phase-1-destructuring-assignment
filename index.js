// ---------------------------
// Array Destructuring for animal sounds
// ---------------------------
const animalSounds = ["cow", "horse", "sheep", "pig", "chicken"];
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Array destructuring for traditional animal names
const animals = ["cow", "sheep", "pig", "chicken"];
const [bessie, dolly, babe, little] = animals;

// Array destructuring for traditional animal colors
const animalColors = ["cow", "sheep", "pig"];
const [blackAndWhite, black, pink] = animalColors;

// ---------------------------
// Array Destructuring for rainbow colors
// ---------------------------
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// Destructuring using initials
const [r, o, y, g, b, , v] = rainbow;
const indg = rainbow[5]; // Indigo using indg

// ---------------------------
// Object Destructuring
// ---------------------------
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const { muppetName, color, song, job, partner } = muppet;

// Nested object destructuring
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  albums: [
    "The Muppet Movie",
    "Moving Right Along",
    "Muppet Treasure Island",
    "I Hope That Something Better Comes Along",
  ],
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

const {
  albums: [, song2, , song4],
  nestedJob,
  nestedPartner,
} = nestedMuppet;

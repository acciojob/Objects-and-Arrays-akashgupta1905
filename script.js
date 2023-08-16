const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array
const team = players;

// Create a copy of the 'players' array
const team1 = [...players];

// Create a copy of the 'person' object
const cap1 = { ...person };

// Example usage and testing
console.log("Original players:", players);
console.log("Reference to players (team):", team);
console.log("Copy of players (team1):", team1);
console.log("Copy of person (cap1):", cap1);

// Modifying team1 and cap1 to demonstrate independence
team1.push("Sam");
cap1.name = "Jane Smith";

console.log("Modified team1:", team1);
console.log("Modified cap1:", cap1);


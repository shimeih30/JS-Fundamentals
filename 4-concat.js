
const [first, second] = process.argv.slice(2);

// Check if both arguments exist
if (first && second) {
  console.log(`${first} is ${second}`);
} else {
  console.log("Not enough arguments provided");
}
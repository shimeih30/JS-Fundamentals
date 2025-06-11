const [first, second] = process.argv.slice(2);
if (first && second) {
  console.log(`${first} is ${second}`);
} else {
  console.log("Not enough arguments provided");
}
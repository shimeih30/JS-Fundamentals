
const x = process.argv[2];

if (isNaN(x) || x.trim() === '') {
  console.log("Missing number of occurrences");
} else {
  const num = parseInt(x, 10);
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
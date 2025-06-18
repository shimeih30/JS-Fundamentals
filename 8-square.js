

const size = process.argv[2];

if (!size || isNaN(size) || !Number.isInteger(Number(size)) || Number(size) <= 0) {
  console.log("Missing size");
} else {
  const squareSize = parseInt(size, 10);
  for (let i = 0; i < squareSize; i++) {
    console.log('X'.repeat(squareSize));
  }
}
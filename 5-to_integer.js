
function isConvertibleToInteger(arg) {
  if (typeof arg !== 'string') {
    return false;
  }

  const trimmed = arg.trim();
  if (/^[+-]?\d+$/.test(trimmed)) {
    return true;
  }
  return false;
}

function main() {
  const args = process.argv.slice(2); 
  
  if (args.length === 0) {
    console.log("Not a number");
    return;
  }

  const firstArg = args[0];
  
  if (isConvertibleToInteger(firstArg)) {
    const num = parseInt(firstArg, 10);
    console.log(`My number: ${num}`);
  } else {
    console.log("Not a number");
  }
}

main();
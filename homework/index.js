// Node.js program to demonstrate the
// process.stdin Property

process.stdin.on("data", function (n) {
  let z = 0;
  do {
    n /= 10;
    z++;
  } while (parseInt(n) != 0);
  console.log(z);
  process.exit();
});


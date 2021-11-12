// console.log(this)

function foo() {
  // console.log(this);
}

// foo();


function logThis() {
  console.log("Is this === window? " + (this === global))
}

var fooOb = {
  logThis: logThis,
}

logThis(); // Is this === window? true

fooOb.logThis();
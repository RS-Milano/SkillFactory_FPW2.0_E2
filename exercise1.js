let value, result;

value = +prompt("Input integer");

if (Number.isInteger(value)) {
    result = value % 2 === 0 ? "even" : "odd";
    console.log(`${value} is ${result}`);
} else {
    console.log("Oops, you seem to be wrong");
}

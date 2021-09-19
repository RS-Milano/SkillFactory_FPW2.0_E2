let X;

X = 4;
// X = "foo";
// X = true;

switch (typeof(X)) {
    case "number":
        console.log(`${X} is number`);
        break;
    case "string":
        console.log(`${X} is string`);
        break;
    case "boolean":
        console.log(`${X} is boolean`);
        break;
    default:
        console.log(`Type ${X} is not defined`);
}

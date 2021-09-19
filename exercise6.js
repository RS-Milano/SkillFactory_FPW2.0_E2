let a = [1, 1, 1];
let result = true;

if (a.length === 0) {
    result = false;
} else if (a.length === 1) {
    result = true;
} else {
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a [i - 1]) {
            result = false;
            break;
        }
    }
}

console.log(result);

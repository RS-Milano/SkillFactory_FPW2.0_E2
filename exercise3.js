let myString = "Hello";

function srtRevers (str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str.slice(str.length - 1, str.length) + srtRevers(str.slice(0, str.length - 1));
    }
}

console.log(srtRevers(myString));

let myMap = new Map();

myMap.set("first", 1);
myMap.set(2, "second");
myMap.set(true, false);

for (let elem of myMap) {
    console.log(`Key - ${elem[0]}, value - ${elem[1]}`);
};

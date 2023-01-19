// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

function appendCat (name) {
    const appendCat = [...cats, name];
    return appendCat;
}
function prependCat (name) {
    const prependCat = [name, ...cats];
    return prependCat;
}
function removeLastCat (name) {
    const removeLastCat = cats.slice(name, -1);
    return removeLastCat;
}

function removeFirstCat (name) {
    const removeFirstCat = cats.slice(1, name);
    return removeFirstCat;
}
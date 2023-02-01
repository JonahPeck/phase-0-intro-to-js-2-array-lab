// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyCat = [...cats, name];
    return copyCat;
}
function prependCat(name) {
    const copyCat = [name, ...cats];
    return copyCat;
}
function removeLastCat() {
    const copyCat = cats.slice(0,2)
    console.log(copyCat);
    return copyCat;
}
function removeFirstCat() {
    const copyCat = cats.slice(1);
    console.log(copyCat);
    return copyCat;
}
//removeFirstCat();


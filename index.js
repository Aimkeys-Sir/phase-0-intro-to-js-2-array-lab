// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name="Ralph")
{
    cats.push(name);
}
function destructivelyPrependCat(name="Guy")
{
cats.unshift(name);
}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(name="Ralph")
{
    return [...cats,name];
}
function prependCat(name="Guy")
{
    return [name,...cats];
}
function removeLastCat()
{
    return cats.slice(0,-1);
}
function removeFirstCat()
{
    return cats.slice(1);
}
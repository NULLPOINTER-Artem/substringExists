
// console.log(substringExists('Я люблю круассаны', 'люблю'));

console.log(substringExists('My home is very tall and big for me alone.', 'home'));

function substringExists(string, substring) {
    if(string.indexOf(substring) != -1){
        return true;
    } else {
        return false;
    }
}
const removeFromArray = function(array, ...args) {

let newArray = new Array(array.length);

    array = array.filter((i) => !args.includes(i))
    
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array,num) {
     let arrayNun = new;


    for(let i = 0; i <= array.length - 1; i++){
        if(array[i] == num){
            array[i] = array[i+1]
            num = array[i+1]
        }

    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;

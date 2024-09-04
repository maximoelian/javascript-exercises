const repeatString = function(string, num) {
    let aux  = "";
    if(num >= 0){
        for(let i = 1 ; i <=num;i++){
        
            aux += string
        
        }
        string = aux;
    }else{ string = "ERROR";}
    return string
};

// Do not edit below this line
module.exports = repeatString;

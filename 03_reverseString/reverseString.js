const reverseString = function(string) {
let stringNum = string.length;
let newString = "";
for(let i = stringNum-1; i>=0;i--){
    newString += string[i];
}
return newString
};

// Do not edit below this line
module.exports = reverseString;

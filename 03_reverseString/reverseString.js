const reverseString = function(stringInput) {
    stringInputArray = stringInput.split("");
    stringInputArrayReverse = stringInputArray.reverse(); 
    reverseStringOutput = stringInputArrayReverse.join('')

    return reverseStringOutput;
};

// Do not edit below this line
module.exports = reverseString;

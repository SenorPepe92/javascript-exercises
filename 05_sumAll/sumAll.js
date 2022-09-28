const sumAll = function(num1, num2) {
    numArray = [];
    
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR'
    }
    else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++){
            let count = numArray.push(i);
        };
    }
    else {
        for (let i = num2; i <= num1; i++){
            let count = numArray.push(i)
        }
    }
    
    let summedArray = 0; 
    for (let i = 0; i < numArray.length; i++) {
        summedArray = summedArray + numArray[i];
    }
    return summedArray;
};

// Do not edit below this line
module.exports = sumAll;

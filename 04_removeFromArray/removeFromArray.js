const removeFromArray = function(inputArray, ...args) {
    filterElements = args; 

    if (filterElements.length < 2) {
        index = inputArray.indexOf(filterElements[0]); 
        newArray = inputArray.splice(index, 1);
        return inputArray;
    }

    else if (filterElements.length > 1) {

        filteredArray = inputArray.filter(element => !filterElements.includes(element));

        return filteredArray;

    }    
    else { 
        console.log('.....else statement....');
    }
};

// Do not edit below this line
module.exports = removeFromArray;
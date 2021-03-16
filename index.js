module.exports = function groupArrayElements(inputArray, numOfArrays){
    const arraySize = inputArray.length / numOfArrays
    if(!Array.isArray(inputArray)) return "Your array is not valid- have another go. Try array syntax eg.[2, 4, 23, 5]"
    if(arraySize < 1) return "Too few items in the array, or too many slices - try again."
    const result = [];
    for (let i =0; i < inputArray.length; i += Math.ceil(arraySize)){
        result.push(inputArray.slice(i, i +  Math.ceil(arraySize)));
    }
    return result;
}




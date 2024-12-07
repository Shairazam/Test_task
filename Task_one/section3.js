function largestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(largestNumber([3, 5, 7, 2, 8])); 


//  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// ,,,,,,,,,,,,,,,,,,,,,,,,


function areElementsUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}

console.log(areElementsUnique([1, 2, 3, 4])); 
console.log(areElementsUnique([1, 2, 2, 4])); 


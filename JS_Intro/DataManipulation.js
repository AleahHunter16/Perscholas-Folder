function validateNumbers(n1, n2, n3, n4) {
    const numbers = [n1, n2, n3, n4];

    // Check for uniqueness
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
        return "Numbers must be unique.";
    }

    // Check if any number is greater than 25
    for (const number of numbers) {
        if (number > 25) {
            return "No number can be larger than 25.";
        }
    }

    // Check if the sum equals 50
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    if (sum !== 50) {
        return "Numbers must add up to 50.";
    }

    // Check for odd numbers
    const oddCount = numbers.filter(num => num % 2 !== 0).length;
    if (oddCount < 2) {
        return "At least two numbers must be odd.";
    }

    return "All conditions are met!";
}

// Example usage:
console.log(validateNumbers(10, 15, 5, 20)); // Adjust values to test
function validateAndCalculate(n1, n2, n3, n4) {
    const numbers = [n1, n2, n3, n4];

    // Check for uniqueness
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
        return "Numbers must be unique.";
    }

    // Check if any number is greater than 25
    const exceedsMaxValue = numbers.some(number => number > 25);
    if (exceedsMaxValue) {
        return "No number can be larger than 25.";
    }

    // Check if the sum equals 50
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    if (sum !== 50) {
        return "Numbers must add up to 50.";
    }

    // Check for odd numbers
    const oddCount = numbers.filter(num => num % 2 !== 0).length;
    if (oddCount < 2) {
        return "At least two numbers must be odd.";
    }

    // Check if all numbers are divisible by 5
    const allDivisibleByFive = numbers.every(num => num % 5 === 0);

    // Check if the first number is larger than the last
    const isFirstLargerThanLast = n1 > n4;

    // Arithmetic chain
    const subtractionResult = n2 - n1;  // Subtract the first number from the second
    const multiplicationResult = subtractionResult * n3; // Multiply by the third number
    const remainderResult = multiplicationResult % n4; // Find the remainder when divided by the fourth number

    return {
        allDivisibleByFive,
        isFirstLargerThanLast,
        remainderResult,
        message: "All conditions are met!"
    };
}

// Example usage:
console.log(validateAndCalculate(10, 15, 5, 20)); // Adjust values to test

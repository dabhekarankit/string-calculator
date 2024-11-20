function Add(numbers) {
    // check if variable empty or blank string return 0
    if (!numbers) return 0;

    if (typeof numbers === "number") {
        return numbers;
    }

    // check if variable have only number value
    if (typeof numbers === "string" && /^[0-9]+$/.test(numbers)) {
        return Number(numbers);
    }

    // Split the string by commas and parse the values
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0); // Sum the numbers
}

export { Add };

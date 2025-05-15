var flat = function (arr, n) {
    // Base case: if n is 0, no flattening needed
    if (n === 0) return arr;

    // Result array to collect flattened elements
    let result = [];

    // Loop through each element in the input array
    for (let item of arr) {
        // If item is an array, and we still have depth left to flatten
        if (Array.isArray(item)) {
            // Recursively flatten this item, reducing depth by 1
            const flattenedItem = flatten(item, n - 1);

            // Spread the flattened item into result
            result.push(...flattenedItem);
        } else {
            // If item is not an array, just push it into result
            result.push(item);
        }
    }

    // Return the flattened result
    return result;
};

// Base case: if n is 0, no flattening needed
    if (n === 0) return arr;

    // Result array to collect flattened elements
    let result = [];

    // Loop through each element in the input array
    for (let item of arr) {
        // If item is an array, and we still have depth left to flatten
        if (Array.isArray(item)) {
            // Recursively flatten this item, reducing depth by 1
            const flattenedItem = flatten(item, n - 1);

            // Spread the flattened item into result
            result.push(...flattenedItem);
        } else {
            // If item is not an array, just push it into result
            result.push(item);
        }
    }

    // Return the flattened result
    return result;
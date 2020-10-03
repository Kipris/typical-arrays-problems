
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let minimum = array[0]
    for (let i = 1; i < array.length; i += 1) {
        if (minimum > array[i]) {
            minimum = array[i]
        }
    }
    return minimum;
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let maximum = array[0]
    for (let i = 1; i < array.length; i += 1) {
        if (maximum < array[i]) {
            maximum = array[i]
        }
    }
    return maximum;
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    const average = sum / array.length;
    return average;
}

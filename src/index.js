module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    const result = [];
    matrix.forEach((el, i) => (i % 2 === 0) ? result.push(...el) : result.push(...el.reverse()));
    return result;
}

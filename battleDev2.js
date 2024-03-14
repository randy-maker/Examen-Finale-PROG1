
export function level2(input) {
    let arr = input
        .filter((x) => x != input[0])
        .map((a) => a.split(/[x]+/i).sort((x, y) => y - x));
    let count = {};
    for (const element of arr) {
        if (element in count) {
            count[element]++;
        }
        else {
            count[element] = 1;
        }
    }
    let acc = 0;
    let res = Object.entries(count);
    for (let index = 0; index < res.length; index++) {
        if (res[index][1] > 1) {
            acc++
        }
    }
    return acc;
}
console.log(level2([6, '8x7x10', '10x8x7', '4x8x6', '1x5x4', '7x5x9', '1x5x4']));
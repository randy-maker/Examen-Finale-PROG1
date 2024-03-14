/**
 * @function level2
 * Cette fonction verifie  le nombre de paires de colis qui ont exactement les memes dimensions
 * @param {Array} input 
 * @returns number
 */
export function level2(input) {
    if (input == null) {
        return 0;
    }
    else {
        let arr = input
            .filter((x) => x != input[0])
            .map((a) => a.split(/[x]+/i).sort((x, y) => y - x));
        let count = {};
        for (let element of arr) {
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
}

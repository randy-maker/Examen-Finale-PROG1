/**
 *@function level1 
 * Cette fonction retourne les genes de l'enfant d'apres la dominance des genes du parents.
 * @param {string[]} input 
 * @returns string
 */
export function level1(input) {
    if (input.length == 0) return "Pas d'enfant";
    let parent1 = input[0];
    let parent2 = input[1];
    let enfant = [];
    for (let i = 0; i < parent1.length; i++) {
        if ((parent1[i] == 'X' && parent2[i] == 'A') || (parent2[i] == 'X' && parent1[i] == 'A')) {
            enfant.push('X')
        }
        else if ((parent1[i] == 'Y' && parent2[i] == 'B') || (parent2[i] == 'Y' && parent1[i] == 'B')) {
            enfant.push('Y')
        }
        else if ((parent1[i] == 'Z' && parent2[i] == 'C') || (parent2[i] == 'Z' && parent1[i] == 'C')) {
            enfant.push('Z')
        }
        else {
            enfant.push(parent1[i]);
        }
    }
    return enfant.join('');
}
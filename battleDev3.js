/**
 *  permet de déterminer le volume contenu dans chacun des deux réservoirs à la fin
 * de la recette.
 * @param {[]} input un tableau avec le format suivant: 
 * le premier élement du tableau correspond au nombre d'instruction de la recette,
 * le reste du tableau correspond au instruction à suivre .
 * @returns deux entier séparés par un esapce: le volume contenu à la fin de la 
 * recette dans le bac de gauche et de droite respectivement.
 */

export function level3 (input){
    let number_of_instructions = input.shift();
    let left = 0;
    let right = 0;
    let jump_instructions = []

    for (let i = 0; i < number_of_instructions; i++){
        let instruction = input[i].split(' ')
        if (instruction[0] == 'ADD'){
            right += parseInt(instruction[1]);
        }
        if (instruction[0] == 'TRANSFER'){
            left += right;
            right = 0;
        }
        if (instruction[0] == 'SWAP'){
            [left, right] = [right , left];
        }
        if (instruction[0] == 'JUMP' && jump_instructions.includes(i) == false ){
            jump_instructions.push(i)
            let jump =  parseInt(instruction[1])
            if (jump != 0){
                i = i + jump - 1;
            }
        }
    }
    return `${left} ${right}`;
}


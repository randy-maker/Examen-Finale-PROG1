import { expect } from "chai";
import { describe, it } from "mocha";
import { level3 } from '../battleDev3.js'

describe('Voici les tests pour le battle Dev level3', () => {
    describe('Quelques tests simples', () => {
        it('Test avec 6 indications', () => {
            expect(level3([6, 'ADD 5', 'SWAP', 'ADD 3', 'JUMP -2', 'TRANSFER', 'ADD 2'])).to.deep.equal('11 2')
        })
    })

})

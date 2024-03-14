import { expect } from "chai";
import { describe, it } from "mocha";
import { level3 } from '../battleDev3.js'

describe('Voici les tests pour le battle Dev level3', () => {
    describe('Quelques tests pour le battle Dev level3', () => {
        it('Test avec 3 indications', () => {
            expect(level3([3, 'ADD 5', 'SWAP', 'ADD 10'])).to.deep.equal('5 10')
        })
        it('Test avec 6 indications', () => {
            expect(level3([6, 'ADD 5', 'SWAP', 'ADD 3', 'JUMP -2', 'TRANSFER', 'ADD 2'])).to.deep.equal('11 2')
        })
        it('Test avec 10 indications contenant JUMP 0', () => {
            expect(level3([10, 'ADD 5', 'SWAP', 'ADD 3', 'JUMP -2', 'TRANSFER', 'ADD 2', 'ADD 5', 'SWAP', 'JUMP 0', 'ADD 2'])).to.deep.equal('7 13')
        })
        it('Test avec 12 indications', () => {
            expect(level3([12, 'ADD 5', 'SWAP', 'ADD 3', 'JUMP -2', 'TRANSFER', 'ADD 2', 'ADD 5', 'SWAP', 'JUMP 0', 'ADD 2', 'TRANSFER', 'ADD 12'])).to.deep.equal('20 12')
        })
    })


})

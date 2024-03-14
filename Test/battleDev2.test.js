import { expect } from "chai";
import { describe, it } from "mocha";
import { level2 } from '../battleDev2.js'

describe('Voici les tests pour le battle Dev level2', () => {
    describe('1 / Quelques tests avec moins de 10 colis:', () => {
        it('1.1 - test sur 3 colis avec un doublon', ()=>{
            expect(level2([3, '6x9x10', '2x10x8', '9x10x6'])).to.deep.equal(1)
        })
        it('1.2 - test sur 6 colis avec 3 doublons ', ()=>{
            expect(level2([8, '6x9x10', '2x10x8', '9x10x6', '2x5x2', '80x50x120', '10x5x10', '10x9x6', '10x10x10'])).to.deep.equal(1)
        })
        it('1.3 - test sur 5 colis avec aucun doublon ', ()=>{
            expect(level2([5, '6x9x10', '6x10x8', '9x8x6', '6x2x10', '5x9x12'])).to.deep.equal(0)
        })
    })
    describe('2 / Quelques tests plus avancés : ', () => {
        it('2.1 - test sur aucun colis ', ()=>{
            expect(level2([0])).to.deep.equal(0)
        })
    })
})

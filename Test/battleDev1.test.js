import { expect } from "chai";
import { describe, it } from "mocha";
import { level1 } from "../battleDev1.js";

describe('Voici le test pour le Battle Dev level1', () => {
    describe('1 / Quelques test pour tester le fonctionnement de base : ', function () {
        it('1.1 - Test avec un parent A possédant un gène récessif',() =>{
            expect(level1(['AYC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('1.2 - Test avec un parent A possédant deux gènes récessif et un parent B avec deux gènes dominantes',() =>{
            expect(level1(['ABC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('1.3 - Test avec un parent A entièrement récessif et un parent B entièrement dominant ',() =>{
            expect(level1(['ABC', 'XYZ'])).to.deep.equal('XYZ');
        })
        it('1.4 - Test avec un parent A possédant un gène récessif',() =>{
            expect(level1(['ABZ', 'XYC'])).to.deep.equal('XYZ');
        })
        it('1.5 - Test avec un parent A partiellement récessif',() =>{
            expect(level1(['XBZ', 'AYC'])).to.deep.equal('XYZ');
        })
    })
    describe('2 / Quelques tests plus avancés : ', () => {
        it('2.1 - Tests pour les tableaux vides', () => {
            expect(level1([])).to.deep.equal("Pas d'enfant"); 
        })
    })

})
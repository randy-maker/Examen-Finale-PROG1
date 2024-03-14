import { expect } from "chai";
import { describe, it } from "mocha";
import { level1 } from "../battleDev1.js";


describe('Voici le test pour le Battle Dev level1', () => {
    describe('1 / Quelques test simples pour tester le fonctionnement de base: ', function () {
        it('Test avec un parent A possédant un gène récessif',() =>{
            expect(level1(['AYC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('Test avec un parent A possédant deux gènes récessif et un parent B avec deux gènes dominantes',() =>{
            expect(level1(['ABC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('Test avec un parent A entièrement récessif et un parent B entièrement dominant ',() =>{
            expect(level1(['ABC', 'XYZ'])).to.deep.equal('XYZ');
        })
    })
    describe('2 / Quelques test plus avancés : ', function () {
        it('Test avec un parent A possédant un gène récessif',() =>{
            expect(level1(['AYC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('Test avec un parent A possédant deux gènes récessif et un parent B avec deux gènes dominantes',() =>{
            expect(level1(['ABC', 'AYZ'])).to.deep.equal('AYZ');
        })
        it('Test avec un parent A entièrement récessif et un parent B entièrement dominant ',() =>{
            expect(level1(['ABC', 'XYZ'])).to.deep.equal('XYZ');
        })
    })





})
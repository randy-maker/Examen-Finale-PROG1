import { expect } from "chai";
import { describe, it } from "mocha";
import { level1 } from "../battleDev1.js";


describe('Voici le test pour le Battle Dev level1', () => {
    describe('1 / Quelques test simples pour tester le fonctionnement de base: ', function () {
        it('Test avec Deux parents ',() =>{
            expect(level1(['AYC', 'AYZ']))
        })
    })



})
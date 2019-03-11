/* eslint-env jest */
import calculateBurguer from '../calculateBurguer'
import Ingredients from '../../../mock/ingredients.json'

describe('tests duck from Burguer', () => {
    it('calcule a price a burguer', () => {
        const sampleBurguer = {
            "id": 1,
            "burguer": "Teste1",
            "ingredients": ["bacon", "hambúrguer de carne", "queijo"]
        }
        const price = sampleBurguer.ingredients.map(el => {
            let ingredientsValue = Ingredients.find(item => item.ingredient === el)
            return ingredientsValue.valor
        })
        const expectedTotal = price && price.reduce((a, b) => a + b, 0);
        const newTotal = calculateBurguer.calcule(sampleBurguer.ingredients, Ingredients)
        expect(newTotal.total).toEqual(expectedTotal)
    })

    it('calcule a price a promotion', () => {
        const sampleBurguer = {
            "id": 1,
            "burguer": "Teste1",
            "ingredients": ["queijo", "queijo", "queijo"]
        };

        const price = sampleBurguer.ingredients.map(el => {
            let ingredientsValue = Ingredients.find(item => item.ingredient === el)
            return ingredientsValue.valor
        });
        
        const value = price && price.reduce((a, b) => a + b, 0);
        const discount = Ingredients.find(item => item.ingredient === 'queijo');
        const expectedValue = {discount: discount.valor, activePromotions : ['Muito Queijo ']}

        const newValue = calculateBurguer.calculePromotions(sampleBurguer.ingredients, Ingredients, value);
        expect(newValue).toEqual(expectedValue);

    })
})
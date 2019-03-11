/* eslint-env jest */
import * as Actions from '../ducks/homeAction'
import * as Reducer from '../ducks/homeReducer'
import Burguers from '../../../mock/burguers.json'
import Ingredients from '../../../mock/ingredients.json'

describe('tests duck from Home', () => {
    it('populates state from mock burguers', () => {
        const action = Actions.getBurguers()
        const expectedState = {
            burguers: Burguers
        }
        const newState = Reducer.default(null, action)
        expect(newState).toEqual(expectedState)
    })

    it('populates state find a burguer from mock', () => {
        const action = Actions.getBurguer(Burguers[0].id)
        const expectedState = {
            burguer: Burguers[0]
        }
        const newState = Reducer.default(null, action)
        expect(newState).toEqual(expectedState)
    })

    it('populates state from mock ingredients', () => {
        const action = Actions.getIngredients()
        const expectedState = {
            ingredients: Ingredients
        }
        const newState = Reducer.default(null, action)
        expect(newState).toEqual(expectedState)
    })
})
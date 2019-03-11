import Burguers from '../../../mock/burguers.json'
import Ingredients from '../../../mock/ingredients.json'

/**
 * Action types
 */
export const types = {
    BURGUERS_FETCH: 'BURGUERS_FETCH',
    BURGUER_FETCH: 'BURGUER_FETCH',
    INGREDIENTS_FETCH: 'INGREDIENTS_FETCH'
  }
  

export function getBurguers() {
    return{
        type: types.BURGUERS_FETCH,
        payload: Burguers
    }
}

export function getBurguer(id) {
    this.getBurguers()
    let burguer = Burguers.find(item => item.id === id)
    return{
        type: types.BURGUER_FETCH,
        payload: burguer
    }
}

export function getIngredients() {
    return{
        type: types.INGREDIENTS_FETCH,
        payload: Ingredients
    }
}


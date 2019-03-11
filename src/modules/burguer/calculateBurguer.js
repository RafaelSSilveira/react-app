class calculateBurguer {
  calcule (burguer, ingredients,) {
    let total = 0.00
    let price = burguer && burguer.map(el => {
        let ingredientsValue = ingredients.find(item => item.ingredient === el)
        return ingredientsValue.valor
    })

    total = price && price.reduce((a, b) => a + b, 0);

    let promotion = this.calculePromotions(burguer, ingredients, total)

    total = total - promotion.discount;
    total = parseFloat(total.toFixed(2))
    let promotionActive = promotion.activePromotions

    return {total, promotionActive}
  }

  calculePromotions(burguer, ingredients, total){
    let activePromotions = [];
    let discount = 0;

    if (burguer.indexOf('alface') > -1 && burguer.indexOf('bacon') <= -1) {
        activePromotions.push('Light ');
        discount += Math.floor(total * 0.1);
    }

    let beef = burguer.filter(el => el === 'hambúrguer de carne').length
    if (beef >= 3 ) {
        activePromotions.push('Muita Carne ');
        let ingredient = ingredients.find( el => el.ingredient === 'hambúrguer de carne');
        discount += ingredient.valor * Math.floor(beef / 3);
    }

    let cheese = burguer.filter(el => el === 'queijo').length
    if (cheese >= 3 ) {
        activePromotions.push('Muito Queijo ');
        let ingredient = ingredients.find( el => el.ingredient === 'queijo');
        discount += ingredient.valor * Math.floor(cheese / 3);
    }

    return {discount, activePromotions}
  }
}

export default new calculateBurguer()
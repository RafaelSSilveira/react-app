import React, { Component } from 'react'
import { connect } from 'react-redux'
import calculateBurguer from './calculateBurguer.js'
import Modal from '../shared/Modal'

class Burguer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientBurguer: {
                ingredients: []
            },
            activePromotion: [],
            value: 0
        }
    }

    calValue() {
        let total = 0;
        let activePromotions = [];

        let calculate = calculateBurguer.calcule(this.state.clientBurguer.ingredients, this.props.ingredients);

        total = calculate.total;
        activePromotions = calculate.promotionActive;

        this.state.value !== total && this.setState({ value: total });

        if (JSON.stringify(activePromotions) !== JSON.stringify(this.state.activePromotion)) {
            this.setState({ activePromotion: activePromotions });
        }

    }

    componentDidMount() {
        this.resetState();
    }

    componentDidUpdate() {
        this.resetState();
    }


    resetState() {
        if (this.props.selectedBurguer && this.props.selectedBurguer.id !== this.state.clientBurguer.id) {
            this.setState({ clientBurguer: this.props.selectedBurguer });
        }



        if (this.props.newBurguer === true && this.state.clientBurguer.burguer !== 'NewBurguer') {
            let initialState = {
                clientBurguer: {
                    burguer: 'NewBurguer',
                    ingredients: []
                },
                value: 0.00
            }
            this.setState(initialState);
        }
        this.calValue();
    }


    AddNewItem(id) {
        let newClientBurguer = this.state.clientBurguer;
        let ingredients = this.props.ingredients;

        let newIngredient = ingredients.find(el => el.id === id);
        newClientBurguer.ingredients.push(newIngredient.ingredient);

        this.setState({ clientBurguer: newClientBurguer });
        this.calValue();
    }

    removeItem(item) {
        let newListingredients = this.state.clientBurguer;
        newListingredients.ingredients.splice(this.state.clientBurguer.ingredients.indexOf(item), 1);

        this.setState({ clientBurguer: newListingredients });
        this.calValue();
    }

    render() {
        return (
            <Modal>
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <h2>
                            <span className="burguer-title">
                                {this.props.selectedBurguer ? this.props.selectedBurguer.burguer : 'Montar Lanche'}
                            </span> -
                            R$: {this.state.value}
                        </h2>
                    </div>
                    <p >Promoções Ativas: <span className="promotion">{this.state.activePromotion}</span></p>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h4 className="burguer-ingredients">Ingredientes do Lanche</h4>
                            <ul>
                                {
                                    this.state.clientBurguer.ingredients && this.state.clientBurguer.ingredients.map((item, index) => {
                                        return (
                                            <li key={index} id={index}>
                                                <button className="btn btn-icon btn-icon-remove" onClick={() => this.removeItem(item)}>
                                                    <span aria-hidden="true">
                                                        <strong>&times;</strong>
                                                    </span>
                                                </button>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h4 className="burguer-ingredients">Adicionais</h4>
                            <ul>
                                {
                                    this.props.ingredients && this.props.ingredients.map(item => {
                                        return (
                                            <li key={item.id} id={item.id}>
                                                <button className="btn btn-icon btn-icon-add" onClick={() => this.AddNewItem(item.id)}>
                                                    <span aria-hidden="true">
                                                        <strong>+</strong>
                                                    </span>
                                                </button>
                                                {item.ingredient}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal >
        )
    }
}

const mapStateToProps = state => {
    const props = {
        selectedBurguer: state.home.burguer,
        ingredients: state.home.ingredients
    }
    return props
}

export default connect(mapStateToProps)(Burguer)

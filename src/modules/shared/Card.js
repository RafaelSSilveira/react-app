import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card text-center col-md-3 col-sm-12">
                <div className="card-header">
                    {this.props.burguerCard ? this.props.burguerCard.burguer : "Monte seu propio Hamburguer"}
                </div>
                <div className="card-body">
                    <ul>
                        {
                            this.props.burguerCard &&  this.props.burguerCard.ingredients.map((el) => {
                                return (
                                    <li key={el} id={el}>
                                        {el}
                                    </li>
                                )
                            })
                        }
                        {!this.props.burguerCard && <li>Escolha suas opções!</li>}
                    </ul>
                </div>
                <button
                    type="button"
                    className="btn btn-default"
                    data-toggle="modal"
                    data-target="#modalDefault"
                    onClick={() => this.props.handleClick(this.props.burguerCard ? this.props.burguerCard.id : null)}>
                    Quero Esse!
                </button>
            </div>
        )
    }
}

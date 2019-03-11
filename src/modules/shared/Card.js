import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card text-center col-md-3 col-sm-12">
                <div className="card-body ">
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-center">
                            <img alt="icon" src={require('../../assets/img/' + (this.props.burguerCard ? this.props.burguerCard.img : 'hamburger.png'))} />
                            <h2>{this.props.burguerCard ? this.props.burguerCard.burguer : "Monte Seu Burguer"} </h2>
                            </div>
                        </div>
                    </div>
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

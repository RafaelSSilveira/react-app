import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getBurguers, getBurguer, getIngredients } from './ducks/homeAction'
import Card from '../shared/Card'
import Burguer from '../burguer/Burguer'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newBurguer: false //when the burger is out of options, state will be true
        }
    }

    componentDidMount() {
        this.props.getBurguers();
        this.props.getIngredients();
    }

    handleClick(arg, newBurguer = false) {
        this.props.getBurguer(arg);
        this.setState({ newBurguer: newBurguer });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {
                        this.props.burguers.map(burguer => {
                            return (
                                <Card
                                    key={burguer.id}
                                    id={burguer.id}
                                    burguerCard={burguer}
                                    handleClick={(arg) => this.handleClick(arg)}
                                >
                                </Card>
                            )
                        })
                    }
                    <Card handleClick={(arg) => this.handleClick(arg, true)}>
                    </Card>
                    <Burguer newBurguer={this.state.newBurguer}></Burguer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const props = {
        burguers: state.home.burguers,
        ingredients: state.home.ingredients
    }
    return props
}

const mapDispatchToProps = dispatch => bindActionCreators({ getBurguers, getBurguer, getIngredients }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)


import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="modalDefault" tabIndex="-1" role="dialog" aria-labelledby="modalDefault" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDefault">Monte Seu Hamburguer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Fechar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

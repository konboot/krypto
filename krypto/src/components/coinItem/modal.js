import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import ModalContent from './modal-content';
import './modal.css';


export class Modal extends React.Component {
    hide(e) {
        e.preventDefault();
        this.props.dispatch(toggleModal());
    }
    render() {
        return (
            <div className='modal-overlay'>
                <div className='modal width-50'>
                    <span onClick={e => this.hide(e)} className='close' id='item-close'>&times;</span>
                    <ModalContent />
                </div>
            </div>
        );
    }
}

export default connect()(Modal);

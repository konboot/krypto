import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import './button.css';

const mapStateToProps = state => ({
    isLoading: state.reducer.isLoading,
});

export class Button extends React.Component {
    showModal(e) {
        e.preventDefault();
        this.props.dispatch(toggleModal(this.props.buttonType));
    }
    render() {
        if (this.props.isLoading) {
            return (
                <div className='button-container'>
                    <button disabled onClick={e => { this.showModal(e); }} className={`${this.props.buttonType} button`}>{this.props.buttonMessage}</button>
                </div>
            );
        } else {
            return (
                <div className='button-container'>
                    <button onClick={e => { this.showModal(e); }} className={`${this.props.buttonType} button`}>{this.props.buttonMessage}</button>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps)(Button);

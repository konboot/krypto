import React from 'react';
import './alert.css';
import { connect } from 'react-redux';
import { removeAlert } from '../actions';

function mapStateToProps(state) {
    return {
        contactType: state.reducer.contactType,
    };
}

export class Alert extends React.Component {
    handleRemove(e) {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this alert?') === true) {
            console.log(e.currentTarget.id, this.props.number, this.props.email, this.props.contactType)
            this.props.dispatch(removeAlert(e.currentTarget.id, this.props.number, this.props.email, this.props.contactType));
        }
    }

    render() {
        return (
            <div className='alert'>
                <h1 className='alert-price'>${this.props.price}</h1>
                <span
                    id={this.props.alertId}
                    email={this.props.email}
                    number={this.props.number}
                    onClick={e => this.handleRemove(e)}
                    className='close'
                >&times;</span>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Alert);

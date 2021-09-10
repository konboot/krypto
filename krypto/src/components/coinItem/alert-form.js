import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setPhonenumber, setEmail, setContactType } from '../actions';
import './form.css';
import Horizontal from './range-slider';


function mapStateToProps(state) {
    return {
        modalTitle: state.reducer.modalTitle,
        modalType: state.reducer.modalType,
        phoneNumber: state.reducer.phoneNumber,
        email: state.reducer.email,
        alertPrice: state.reducer.alertPrice,
        contactType: state.reducer.contactType,

    };
}

export class AlertForm extends React.Component {
    constructor(props) {
        super(props)
        this.setNumber = this.setNumber.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    setNumber(e) {
        this.props.dispatch(setPhonenumber(e.target.value));
    }
    setEmail(e) {
        this.props.dispatch(setEmail(e.target.value));
    }
    handleSelect(e) {
        this.props.dispatch(setContactType(e.target.value));
    }
    render() {
        let slider;
        let inputType;
        if (this.props.modalType === 'info') {
            slider = <Horizontal />
        }
        if (this.props.contactType === 'email') {
            inputType = <div className='input-container'>
                <label>Email:</label>
                <Field
                    name='email'
                    component='input'
                    type='email'
                    label='Email'
                    onChange={e => this.setEmail(e)}
                    placeholder='bit@alert.com'
                />
            </div>
        }
        if (this.props.contactType === 'phoneNumber') {
            inputType = <div className='input-container'>
                <label>Phone Number:</label>
                <Field
                    name='phoneNumber'
                    type='tel'
                    component='input'
                    label='Phone Number'
                    value={this.props.phoneNumber}
                    onChange={e => this.setNumber(e)}
                    placeholder='(999)-999-9999'
                />
            </div>
        }

        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className='form-container'>
                    <label>Notification Type</label>
                    <div className='radio'>
                        <label>
                            <Field
                                className='radio'
                                name='contact'
                                component='input'
                                type='radio'
                                value='phoneNumber'
                                onChange={e => this.handleSelect(e)}
                            />
                            Phone Number
                        </label>
                        <label>
                            <Field
                                className='radio'
                                name='contact'
                                component='input'
                                type='radio'
                                value='email'
                                onChange={e => this.handleSelect(e)}
                            />
                            Email
                        </label>
                    </div>
                    {inputType}
                    {slider}
                </div>
            </form>
        )
    }
}


AlertForm = reduxForm({
    form: 'alert'
})(AlertForm)


export default connect(mapStateToProps)(AlertForm)
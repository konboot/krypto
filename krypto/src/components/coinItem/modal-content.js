import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoneAlert, fetchEmailAlert, createPhoneAlert, createEmailAlert } from '../actions';
import AlertContainer from './alert-container';
import Submit from './submit-button';
import AlertForm from './alert-form';
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

export class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.submitEditHandler = this.submitEditHandler.bind(this);
        this.submitCreateHandler = this.submitCreateHandler.bind(this);
    }

    submitEditHandler() {
        if (this.props.contactType === 'phoneNumber') {
            const number = this.props.phoneNumber.replace(/\D/g, '');
            if (number === '') {
                alert('Please enter a valid phone number');
            } else {
                this.props.dispatch(fetchPhoneAlert(number));
            }
        } else {
            //add email validation
            const email = this.props.email;
            this.props.dispatch(fetchEmailAlert(email));

        }
    }
    submitCreateHandler() {
        if (this.props.contactType === 'phoneNumber') {
            const number = this.props.phoneNumber.replace(/\D/g, '');
            if (number === '') {
                alert('Please enter a valid phone number');
            } else {
                this.props.dispatch(createPhoneAlert(number, this.props.alertPrice));
            }
        } else {
            //add email validation
            const email = this.props.email;
            this.props.dispatch(createEmailAlert(email, this.props.alertPrice));
        }
    }

    render() {
        let modalContent;
        if (this.props.modalType === 'info') {
            modalContent = <div className='width-100'>
                <Submit action={this.submitCreateHandler} />
            </div>;
        } else if (this.props.modalType === 'danger') {
            modalContent = <div className='width-100'>
                <AlertContainer />
                <Submit action={this.submitEditHandler} />
            </div>;
        }
        return (
            <div className='modal-content'>
                <h2 className='modal-title'>{this.props.modalTitle}</h2>
                <hr />
                <AlertForm />
                {modalContent}
            </div>
        );
    }

}

export default connect(mapStateToProps)(ModalContent);
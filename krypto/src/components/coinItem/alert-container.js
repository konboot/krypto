import React from 'react';
import './alert.css';
import Alert from './alert';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        alerts: state.reducer.alerts,
        serverMessage: state.reducer.serverMessage,
    };
}

export class AlertContainer extends React.Component {
    render() {
        let message;
        if (this.props.serverMessage) {
            message = <h1 className='error-msg'>{this.props.serverMessage}</h1>;
        }
        const userAlerts = this.props.alerts.map((alert, index) => {
            return <li key={index}>
                <Alert
                    number={alert.phoneNumber}
                    email={alert.email}
                    price={alert.alert.price}
                    alertId={alert.id}
                />
            </li>;
        });
        return (
            <div className='alert-container'>
                <h1 className='alert-title'>Alerts</h1>
                <ul>
                    {userAlerts}
                    {message}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AlertContainer);

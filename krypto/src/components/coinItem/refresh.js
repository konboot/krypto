import React from 'react';

export default class Refresh extends React.Component {
    render() {
        return (
            <div className='refresh-container'>
                <button onClick={this.props.handlingMethod} className="refresh"><i className='fa fa-refresh' aria-hidden='true'></i></button>
            </div>
        );
    }
}

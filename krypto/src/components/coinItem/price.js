import React from 'react';
import Refresh from './refresh';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions';
import './price.css';


function mapStateToProps(state) {
    return {
        priceHistory: state.reducer.priceHistory,
    };
}

export class Price extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPrice());
    }
    getCurrentPrice(e) {
        e.preventDefault();
        this.props.dispatch(fetchPrice());
    }

    render() {
        let currentPrice;
        if (this.props.priceHistory && this.props.priceHistory.length > 0) {
            let index = this.props.priceHistory.length - 1;
            currentPrice = this.props.priceHistory[index].price;
        }
        return (
            <div className='price-container'>
                <h1 className='price'>BTC ${currentPrice}</h1>
                <Refresh handlingMethod={e => { this.getCurrentPrice(e); }} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Price);

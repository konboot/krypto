import React from 'react';
import './chart.css';
import { connect } from 'react-redux';
import { LineChart } from 'react-easy-chart';


function mapStateToProps(state) {
    return {
        priceHistory: state.reducer.priceHistory,
    };
}

class Chart extends React.Component {
    render() {
        let data = [];
        if (this.props.priceHistory && this.props.priceHistory.length > 0) {
            this.props.priceHistory.forEach((price) => {
                data.push({ x: price.timestamp, y: price.price });
            });
        }

        return (
          <LineChart
            xType='time'
            datePattern='%Y-%m-%dT%H:%M:%S.%LZ'
            axes
            axisLabels={{ x: 'Timestamp', y: 'Price' }}
            tickTimeDisplayFormat='%H:%M'
            xTicks={5}
            yTicks={5}
            lineColors={['red']}
            width={350}
            height={250}
            data={[
                    data,
                ]}
          />
        );
    }
}

export default connect(mapStateToProps)(Chart);

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Refresh from './refresh';

describe('<Refresh />', () => {
    it('Renders without crashing', () => {
        shallow(<Refresh />);
    });
});

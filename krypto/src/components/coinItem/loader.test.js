import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Loader from './loader';

describe('<Loader />', () => {
    it('Renders without crashing', () => {
        shallow(<Loader />);
    });
});

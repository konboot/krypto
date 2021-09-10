import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Logo from './logo';

describe('<Logo />', () => {
    it('Renders without crashing', () => {
        shallow(<Logo />);
    });
});

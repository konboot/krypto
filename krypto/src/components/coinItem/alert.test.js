import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Alert } from './alert';
import { removeAlert } from '../actions';

describe('<Alert />', () => {
    it('Renders without crashing', () => {
        shallow(<Alert />);
    });
    it('Renders with the correct price', () => {
        const price = 17000;
        const wrapper = shallow(<Alert price={price} />);
        expect(wrapper.contains(price)).toEqual(true);
    });
    it('Should fire the handleRemove callback when clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Alert dispatch={dispatch} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() { },
        });
        expect(window.confirm).toBeTruthy();
    });
});

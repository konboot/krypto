import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Button } from './button';
import { toggleModal } from '../actions';

describe('<Button />', () => {
    it('Renders without crashing', () => {
        shallow(<Button />);
    });
    it('Should fire the showModal callback when clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Button dispatch={dispatch} />);
        wrapper.find('button').simulate('click', {
            preventDefault() { },
        });
        expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE_MODAL' });
    });
});

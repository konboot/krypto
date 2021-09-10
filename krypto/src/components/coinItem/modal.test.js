import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Modal } from './modal';
import { toggleModal } from '../actions';

describe('<Modal />', () => {
    it('Renders without crashing', () => {
        shallow(<Modal />);
    });
    it('Should fire the setNumber callback when changed', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Modal dispatch={dispatch} />);
        wrapper.find('span').simulate('click', {
            preventDefault() { },
        });
        expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE_MODAL' });
    });
});

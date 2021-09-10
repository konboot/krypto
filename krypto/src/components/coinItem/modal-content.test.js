import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { ModalContent } from './modal-content';

describe('<ModalContent />', () => {
    it('Renders without crashing', () => {
        shallow(<ModalContent />);
    });
});

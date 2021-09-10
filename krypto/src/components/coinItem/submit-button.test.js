import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SubmitButton from './submit-button';

describe('<SubmitButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SubmitButton />);
    });
});

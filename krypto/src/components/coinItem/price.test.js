import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { Price } from './price';

describe('<Price />', () => {
    it('Renders without crashing', () => {
        render(<Price />)

    });
});

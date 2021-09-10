import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { AlertContainer } from './alert-container';

describe('<AlertContainer />', () => {
    it('Renders without crashing', () => {
        shallow(<AlertContainer alerts={[]} />);
    });
    it('Renders a list of alerts', () => {
        const userAlerts = [{ phoneNumber: 1234561234, alert: { removeFlag: false, price: 17000 } }, { phoneNumber: 1234561234, alert: { removeFlag: false, price: 17000 } }];
        const wrapper = shallow(<AlertContainer alerts={userAlerts} />);
        const alerts = wrapper.find('li');
        expect(alerts.length).toEqual(userAlerts.length);
    });
});

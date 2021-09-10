import * as actions from './actions';
import reducer from './reducer';

import {
    toggleModal,
    fetchPriceSuccess,
    fetchPriceInitiated,
    fetchAlertSuccess,
    fetchAlertEmpty,
    setPhonenumber,
    setAlertPrice,
    createAlertSuccess,
    setContactType,
    setEmail,
} from './actions';

describe('reducer', () => {
    it('Should return the initial state when no action is passed', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(state.showModal).toEqual(false);
        expect(state.modalTitle).toEqual('');
        expect(state.modalType).toEqual('');
        expect(state.alerts).toEqual([]);
        expect(state.priceHistory).toEqual([]);
        expect(state.phoneNumber).toEqual('');
        expect(state.email).toEqual('');
        expect(state.contactType).toEqual(undefined);
        expect(state.alertPrice).toEqual(0);
        expect(state.isLoading).toEqual(false);
        expect(state.serverMessage).toEqual(undefined);
    });

    it('Should toggle the info modal', () => {
        let state = {
            showModal: false,
            priceHistory: [17000],
        };
        state = reducer(state, toggleModal('info', 17000));
        expect(state.showModal).toEqual(true);
        expect(state.modalTitle).toEqual('Set New Alert');
        expect(state.modalType).toEqual('info');
    });

    it('Should toggle the danger modal', () => {
        let state = {
            showModal: false,
            priceHistory: [17000],
        };
        state = reducer(state, toggleModal('danger', 17000));
        expect(state.showModal).toEqual(true);
        expect(state.modalTitle).toEqual('Edit Alerts');
        expect(state.modalType).toEqual('danger');
    });

    it('Should close the modal', () => {
        let state = {
            showModal: false,
            priceHistory: [17000],
            phoneNumber: 1234561234,
            alerts: [15000],
            serverMessage: 'TEST',
            contactType: 'phoneNumber',
            email: 'test@test.com'
        };
        state = reducer(state, toggleModal());
        expect(state.showModal).toEqual(false);
        expect(state.alerts).toEqual([]);
        expect(state.phoneNumber).toEqual('');
        expect(state.serverMessage).toEqual(undefined);
        expect(state.contactType).toEqual(undefined);
        expect(state.email).toEqual('');
    });

    it('Should set loading state to true', () => {
        let state = {
            isLoading: false,
        };
        state = reducer(state, fetchPriceInitiated());
        expect(state.isLoading).toEqual(true);
    });

    it('Should set loading state to false and add price to history', () => {
        let state = {
            isLoading: true,
            priceHistory: [],
        };
        let res = { price: 17000, timestamp: 12343123 };
        state = reducer(state, fetchPriceSuccess(res));
        expect(state.isLoading).toEqual(false);
        expect(state.priceHistory).toEqual(res);
    });

    it('Should update the alerts array', () => {
        let state = {
            alerts: [],
        };
        let res = { phoneNumber: 1234561234, alert: { price: 17000, isFlagged: false, created: 1234321 } };
        state = reducer(state, fetchAlertSuccess(res));
        expect(state.alerts).toEqual(res);
    });

    it('Should set server message and alerts if res is empty', () => {
        let state = {
            isLoading: false,
            serverMessage: undefined,

        };
        state = reducer(state, fetchAlertEmpty());
        expect(state.serverMessage).toEqual('No alerts associated with this number');
        expect(state.alerts).toEqual([]);
    });

    it('Should set contact type', () => {
        let state = {
            contactType: undefined,
        };
        state = reducer(state, setContactType('email'));
        expect(state.contactType).toEqual('email');
    });

    it('Should set phoneNumber', () => {
        let state = {
            phoneNumber: '',
        };
        state = reducer(state, setPhonenumber(1234561234));
        expect(state.phoneNumber).toEqual(1234561234);
    });

    it('Should set email', () => {
        let state = {
            email: '',
        };
        state = reducer(state, setEmail('test@test.com'));
        expect(state.email).toEqual('test@test.com');
    });

    it('Should set alertPrice', () => {
        let state = {
            alertPrice: '',
        };
        state = reducer(state, setAlertPrice(17000));
        expect(state.alertPrice).toEqual(17000);
    });

    it('Should set showModal to false and phoneNumber to an empty string', () => {
        let state = {
            phoneNumber: '12345321',
            showModal: true,
            contactType: 'phoneNumber',
            email: 'test@test.com'
        };
        let res = { phoneNumber: 1234561234, alert: { price: 17000, isFlagged: false, created: 1234321 } };
        state = reducer(state, createAlertSuccess(res));
        expect(window.confirm).toBeTruthy();
        expect(state.phoneNumber).toEqual('');
        expect(state.showModal).toEqual(false);
        expect(state.contactType).toEqual(undefined);
        expect(state.email).toEqual('');
    });
});

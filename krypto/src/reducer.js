import {
    TOGGLE_MODAL,
    FETCH_PRICE_SUCCESS,
    FETCH_ALERT_SUCCESS,
    CREATE_ALERT_SUCCESS,
    SET_PHONENUMBER,
    SET_EMAIL,
    SET_ALERT_PRICE,
    FETCH_PRICE_INITIATED,
    FETCH_ALERT_EMPTY,
    SET_CONTACT_TYPE,
} from './actions';


const initialState = {
    showModal: false,
    modalTitle: '',
    modalType: '',
    alerts: [],
    priceHistory: [],
    phoneNumber: '',
    email: '',
    contactType: undefined,
    alertPrice: 0,
    isLoading: false,
    serverMessage: undefined,

};

const reducer = (state = initialState, action) => {

    if (action.type === TOGGLE_MODAL) {
        if (action.modalContent === 'info') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                modalTitle: 'Set New Alert',
                modalType: 'info',
                alertPrice: state.priceHistory[state.priceHistory.length - 1].price,
            });
        } else if (action.modalContent === 'danger') {
            state = Object.assign({}, state, {
                showModal: !state.showModal,
                modalTitle: 'Edit Alerts',
                modalType: 'danger',
            });
        } else {
            state = Object.assign({}, state, {
                showModal: false,
                alerts: [],
                phoneNumber: '',
                email: '',
                contactType: undefined,
                serverMessage: undefined,
            });
        }
        return state;
    }
    if (action.type === FETCH_PRICE_INITIATED) {
        state = Object.assign({}, state, {
            isLoading: true,
        });
        return state;
    }
    if (action.type === FETCH_PRICE_SUCCESS) {
        state = Object.assign({}, state, {
            priceHistory: action.res,
            isLoading: false,
        });
        return state;
    }
    if (action.type === FETCH_ALERT_SUCCESS) {
        state = Object.assign({}, state, {
            alerts: action.res,
        });
        return state;
    }
    if (action.type === FETCH_ALERT_EMPTY) {
        state = Object.assign({}, state, {
            serverMessage: 'No alerts associated with this number',
            alerts: [],
        });
    }
    if (action.type === SET_CONTACT_TYPE) {
        state = Object.assign({}, state, {
            contactType: action.contactType,
            alerts: [],
            serverMessage: undefined
        });
        return state;
    }
    if (action.type === SET_PHONENUMBER) {
        state = Object.assign({}, state, {
            phoneNumber: action.phoneNumber,
        });
        return state;
    }
    if (action.type === SET_EMAIL) {
        state = Object.assign({}, state, {
            email: action.email,
        });
        return state;
    }
    if (action.type === SET_ALERT_PRICE) {
        state = Object.assign({}, state, {
            alertPrice: action.alertPrice,
        });
        return state;
    }
    if (action.type === CREATE_ALERT_SUCCESS) {
        alert(`Alert set for $${action.res.alert.price}`);
        state = Object.assign({}, state, {
            showModal: false,
            phoneNumber: '',
            email: '',
            contactType: undefined,
        });
    }
    return state;
};

export default reducer;

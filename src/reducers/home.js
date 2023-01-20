import { TRADE_DIALOG_HIDE, TRADE_DIALOG_SHOW } from '../constants/home';
import { combineReducers } from 'redux';

const tradeDialog = (state = {
    open: false,
    data: {},
}, action) => {
    switch (action.type) {
    case TRADE_DIALOG_SHOW:
        return {
            open: true,
            data: action.data,
        };
    case TRADE_DIALOG_HIDE:
        return {
            open: false,
            message: '',
            data: {},
        };
    default:
        return state;
    }
};

export default combineReducers({
    tradeDialog,
});

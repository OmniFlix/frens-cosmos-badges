import { TRADE_DIALOG_HIDE, TRADE_DIALOG_SHOW } from '../constants/home';
import { combineReducers } from 'redux';

const tradeDialog = (state = {
    open: false,
}, action) => {
    switch (action.type) {
    case TRADE_DIALOG_SHOW:
        return {
            open: true,
        };
    case TRADE_DIALOG_HIDE:
        return {
            open: false,
            message: '',
        };
    default:
        return state;
    }
};

export default combineReducers({
    tradeDialog,
});

import { TRADE_DIALOG_HIDE, TRADE_DIALOG_SHOW } from '../constants/home';

export const showTradeDialog = () => {
    return {
        type: TRADE_DIALOG_SHOW,
    };
};

export const hideTradeDialog = () => {
    return {
        type: TRADE_DIALOG_HIDE,
    };
};

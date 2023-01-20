import { TRADE_DIALOG_HIDE, TRADE_DIALOG_SHOW } from '../constants/home';

export const showTradeDialog = (data) => {
    return {
        type: TRADE_DIALOG_SHOW,
        data,
    };
};

export const hideTradeDialog = () => {
    return {
        type: TRADE_DIALOG_HIDE,
    };
};

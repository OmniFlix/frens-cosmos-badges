import { combineReducers } from 'redux';
import language from './language';
import snackbar from './snackbar';
import account from './account';
import home from './home';
import mint from './mint';

export default combineReducers({
    account,
    language,
    snackbar,
    home,
    mint,
});

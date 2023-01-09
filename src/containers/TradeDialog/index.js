import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { hideTradeDialog } from '../../actions/home';
import { Dialog } from '@mui/material';

const TradeDialog = (props) => {
    return (
        <Dialog
            aria-describedby="preview-dialog-description"
            aria-labelledby="preview-dialog-title"
            className="dialog trade_dialog"
            open={props.open}
            onClose={props.handleClose}>
            <div className="trade_content">
                <div></div>
                <div className="right_section">

                </div>
            </div>
        </Dialog>
    );
};

TradeDialog.propTypes = {
    handleClose: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
    return {
        open: state.home.tradeDialog.open,
        lang: state.language,
    };
};

const actionToProps = {
    handleClose: hideTradeDialog,
};

export default connect(stateToProps, actionToProps)(TradeDialog);

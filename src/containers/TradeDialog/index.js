import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { hideTradeDialog } from '../../actions/home';
import { Button, Dialog } from '@mui/material';
import variables from '../../utils/variables';
import Icon from '../../components/Icon';

const TradeDialog = (props) => {
    return (
        <Dialog
            aria-describedby="preview-dialog-description"
            aria-labelledby="preview-dialog-title"
            className="dialog trade_dialog"
            open={props.open}
            onClose={props.handleClose}>
            <div className="trade_content">
                <div className="left_section"></div>
                <div className="right_section">
                    <Button className="cross_button" onClick={props.handleClose}>
                        <Icon className="cross" icon="cross" />
                    </Button>
                    <h2>
                        bear market
                    </h2>
                    <p>
                        We are five full-time Cosmonauts with technical backgrounds.
                    </p>
                    <div>
                        <Button>
                            {variables[props.lang].category}
                        </Button>
                        <Button>
                            {variables[props.lang].category}
                        </Button>
                    </div>
                    <div className="content">
                        View on chainexplorer
                    </div>
                    <Button className="trade_button">
                        {variables[props.lang].trade}
                    </Button>
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

import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import { hideTradeDialog } from '../../actions/home';
import { Button, Dialog } from '@mui/material';
import variables from '../../utils/variables';
import Icon from '../../components/Icon';

const TradeDialog = (props) => {
    console.log('asdasbdjasdds', props.data)
    const preview = props.data && props.data.nft_meta && props.data.nft_meta.preview_uri;
    return (
        <Dialog
            aria-describedby="preview-dialog-description"
            aria-labelledby="preview-dialog-title"
            className="dialog trade_dialog"
            open={props.open}
            onClose={props.handleClose}>
            <div className="trade_content">
                <div className="left_section">
                    <img
                        alt=""
                        src={preview}/>
                </div>
                <div className="right_section">
                    <Button className="cross_button" onClick={props.handleClose}>
                        <Icon className="cross" icon="cross"/>
                    </Button>
                    <h2>
                        {props.data && props.data.nft_meta && props.data.nft_meta.name}
                    </h2>
                    <p>
                        {props.data && props.data.nft_meta && props.data.nft_meta.description}
                    </p>
                    {/*<div>*/}
                    {/*    <Button>*/}
                    {/*        {variables[props.lang].category}*/}
                    {/*    </Button>*/}
                    {/*    <Button>*/}
                    {/*        {variables[props.lang].category}*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                    {/*<div className="content">*/}
                    {/*    View on chainexplorer*/}
                    {/*</div>*/}
                    <Button className="trade_button">
                        {variables[props.lang].claim}
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};

TradeDialog.propTypes = {
    data: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
};

const stateToProps = (state) => {
    return {
        open: state.home.tradeDialog.open,
        data: state.home.tradeDialog.data,
        lang: state.language,
    };
};

const actionToProps = {
    handleClose: hideTradeDialog,
};

export default connect(stateToProps, actionToProps)(TradeDialog);

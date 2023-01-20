import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import { showTradeDialog } from '../../actions/home';
import { ReactComponent as HandIcon } from '../../assets/hand.svg';
import { showMessage } from '../../actions/snackbar';

const Section2 = (props) => {
    const handleShow = (value) => {
        // if (!props.address) {
        //     props.showMessage('Connect Account');
        //
        //     return;
        // }

        props.showTradeDialog(value);
    };

    const list = props.list && props.list.length > 2
        ? props.list.slice(0, 2) : props.list;

    return (
        <div className="cards_section section2">
            {list && list.length
                ? list.map((val, index) => {
                    const preview = val.nft_meta && val.nft_meta.preview_uri;
                    return (
                        <div key={index} className="card">
                            <div className="img_section">
                                    <img
                                        alt=""
                                        src={preview}/>
                            </div>
                            <div className="details actions">
                                <Button className="claim" onClick={() => handleShow(val)}>
                                    {variables[props.lang].claim}
                                </Button>
                                <Button disabled className="purchase">
                                    {variables[props.lang].purchase}
                                </Button>
                            </div>
                        </div>
                    );
                }) : null}
        </div>
    );
};

Section2.propTypes = {
    address: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    showMessage: PropTypes.func.isRequired,
    showTradeDialog: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
    return {
        address: state.account.wallet.connection.address,
        lang: state.language,
        list: state.mint.projectsList.value,
    };
};

const actionToProps = {
    showMessage,
    showTradeDialog,
};

export default connect(stateToProps, actionToProps)(Section2);

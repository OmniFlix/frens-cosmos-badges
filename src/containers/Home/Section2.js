import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import { showTradeDialog } from '../../actions/home';
import { showMessage } from '../../actions/snackbar';

const Section2 = (props) => {
    const handleShow = (value) => {
        if (!props.address) {
            props.showMessage('Connect Account');

            return;
        }

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
                            {props.claimStatusInProgress
                                ? null
                                : props.claimStatus && props.claimStatus.length
                                    ? <div className="details">
                                        <h2 title={val.nft_meta && val.nft_meta.name}>
                                            {val.nft_meta && val.nft_meta.name}
                                        </h2>
                                        <p title={val.nft_meta && val.nft_meta.description}>
                                            {val.nft_meta && val.nft_meta.description}
                                        </p>
                                    </div>
                                    : <div className="details actions">
                                        <Button className="claim" onClick={() => handleShow(val)}>
                                            {variables[props.lang].claim}
                                        </Button>
                                        <Button disabled className="purchase">
                                            {variables[props.lang].purchase}
                                        </Button>
                                    </div>}
                        </div>
                    );
                }) : null}
        </div>
    );
};

Section2.propTypes = {
    address: PropTypes.string.isRequired,
    claimStatus: PropTypes.array.isRequired,
    claimStatusInProgress: PropTypes.bool.isRequired,
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
        claimStatus: state.mint.claimStatus.value,
        claimStatusInProgress: state.mint.claimStatus.inProgress,
    };
};

const actionToProps = {
    showMessage,
    showTradeDialog,
};

export default connect(stateToProps, actionToProps)(Section2);

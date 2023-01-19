import React from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aminoSignTx, initializeChain } from '../../actions/account/wallet';
import withRouter from '../../components/WithRouter';

const KeplrButton = (props) => {
    const initKeplr = () => {
        props.initializeChain();
    };

    return (
        <div className="keplr_button">
            {props.address
                ? props.address
                : <Button onClick={initKeplr}>
                    {variables[props.lang].connect}
                </Button>}
        </div>
    );
};

KeplrButton.propTypes = {
    address: PropTypes.string.isRequired,
    aminoSignTx: PropTypes.func.isRequired,
    initializeChain: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    router: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }),
};

const stateToProps = (state) => {
    return {
        address: state.account.wallet.connection.address,
        lang: state.language,
    };
};

const actionToProps = {
    aminoSignTx,
    initializeChain,
};

export default withRouter(connect(stateToProps, actionToProps)(KeplrButton));

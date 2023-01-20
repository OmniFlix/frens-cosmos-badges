import React, { Component } from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aminoSignTx, initializeChain } from '../../actions/account/wallet';
import withRouter from '../../components/WithRouter';

class KeplrButton extends Component {
    componentDidMount () {
        if (localStorage.getItem('frens_cosmos_badges_address')) {
            this.initKeplr();
        }
    }

    initKeplr () {
        this.props.initializeChain((address) => {
            localStorage.setItem('frens_cosmos_badges_address', address && address.length && address[0] && address[0].address);
        });
    }

    render () {
        return (
            <div className="keplr_button">
                {this.props.address
                    ? this.props.address
                    : <Button onClick={this.initKeplr}>
                        {variables[this.props.lang].connect}
                    </Button>}
            </div>
        );
    }
}

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

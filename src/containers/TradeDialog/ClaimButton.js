import React from 'react';
import { Button } from '@material-ui/core';
import variables from '../../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    fetchMintQueue,
    fetchMintRequest,
    fetchProjectsList,
    hideConfirmMintNFTDialog,
    mintNFT,
    setMintNFTInProgress,
} from '../../../actions/recap';
import { showMessage } from '../../../actions/snackbar';

const ClaimButton = (props) => {
    const handleClaim = () => {
        props.setMintNFTInProgress(true);
        const projectID = props.projects && props.projects._id;
        const address = props.address;

        const data = {
            address: address,
            quantity: 1,
        };

        props.mintNFT(projectID, data, (result) => {
            if (result) {
                setTimeout(() => {
                    const mintQueueTime = setInterval(() => {
                        props.fetchMintQueue(address, projectID, (result) => {
                            if (result && result.length === 0) {
                                clearInterval(mintQueueTime);
                                const mintRequestTime = setInterval(() => {
                                    props.fetchMintRequest(address, projectID, (result) => {
                                        if (result && result.length && result[0] && result[0].status &&
                                            result[0].status === 'COMPLETED') {
                                            // props.handleClose();
                                            clearInterval(mintRequestTime);
                                            props.fetchProjectsList(address);
                                            props.showMessage('Minted Successfully', 'success');
                                            props.setMintNFTInProgress(false);
                                        }
                                    });
                                }, 2000);
                            }
                        });
                    }, 2000);
                }, 2000);
            } else {
                props.setMintNFTInProgress(false);
            }
        });

        // props.handleClose();
    };

    return (
        <Button
            disabled={props.inProgress || props.mintNFTInProgress}
            onClick={handleClaim}>
            {props.inProgress || props.mintNFTInProgress
                ? <p>{variables[props.lang].processing + '...'}</p>
                : <p>{variables[props.lang]['get_your_nft']}</p>}
        </Button>
    );
};

ClaimButton.propTypes = {
    address: PropTypes.string.isRequired,
    fetchMintQueue: PropTypes.func.isRequired,
    fetchMintRequest: PropTypes.func.isRequired,
    fetchProjectsList: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired,
    mintNFT: PropTypes.func.isRequired,
    mintNFTInProgress: PropTypes.bool.isRequired,
    projects: PropTypes.object.isRequired,
    setMintNFTInProgress: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired,
};

const stateToProps = (state) => {
    return {
        address: state.account.wallet.connection.address,
        value: state.home.tradeDialog.data,
        projects: state.recap.mintNftDetails.value,
        lang: state.language,
        inProgress: state.recap.nftMint.inProgress,
        mintNFTInProgress: state.recap.generateInProgress.mintNFTInProgress,
    };
};

const actionToProps = {
    fetchMintRequest,
    fetchMintQueue,
    fetchProjectsList,
    handleClose: hideConfirmMintNFTDialog,
    mintNFT,
    setMintNFTInProgress,
    showMessage,
};

export default connect(stateToProps, actionToProps)(ClaimButton);

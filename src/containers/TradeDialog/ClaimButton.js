import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import variables from '../../utils/variables';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    checkNFTClaimStatus,
    fetchMintQueue,
    fetchMintRequest,
    fetchProjectsList,
    mintNFT,
    setMintNFTInProgress,
} from '../../actions/mint';
import { hideTradeDialog } from '../../actions/home';
import { showMessage } from '../../actions/snackbar';

const ClaimButton = (props) => {
    const [timerObj] = useState({});

    useEffect(() => {
        return () => {
            if (timerObj.queueTimer) {
                clearInterval(timerObj.queueTimer);
            }
        };
        // eslint-disable-next-line
    }, []);

    const handleClaim = () => {
        props.setMintNFTInProgress(true);
        const projectID = props.value && props.value._id;
        const address = props.address;

        const data = {
            address: address,
            quantity: 1,
        };

        props.mintNFT(projectID, data, (result) => {
            if (result) {
                setTimeout(() => {
                    if (timerObj.queueTimer) {
                        clearInterval(timerObj.queueTimer);
                    }

                    timerObj.queueTimer = setInterval(() => {
                        props.fetchMintQueue(address, projectID, (result) => {
                            if (result && result.length === 0) {
                                clearInterval(timerObj.queueTimer);
                                const mintRequestTime = setInterval(() => {
                                    props.fetchMintRequest(address, projectID, (result) => {
                                        if (result && result.length && result[0] && result[0].status &&
                                            result[0].status === 'COMPLETED') {
                                            clearInterval(mintRequestTime);
                                            props.fetchProjectsList(address);
                                            props.checkNFTClaimStatus(props.value && props.value.denom &&
                                                props.value.denom.id, address);
                                            props.showMessage('Minted Successfully', 'success');
                                            props.setMintNFTInProgress(false);
                                            props.handleClose();
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
            className="trade_button"
            disabled={props.inProgress || props.mintNFTInProgress}
            onClick={handleClaim}>
            {props.inProgress || props.mintNFTInProgress
                ? <p>{variables[props.lang].processing + '...'}</p>
                : <p>{variables[props.lang].claim}</p>}
        </Button>
    );
};

ClaimButton.propTypes = {
    address: PropTypes.string.isRequired,
    checkNFTClaimStatus: PropTypes.func.isRequired,
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
        projects: state.mint.projectsList.value,
        lang: state.language,
        inProgress: state.mint.nftMint.inProgress,
        mintNFTInProgress: state.mint.mintInProgress,
    };
};

const actionToProps = {
    checkNFTClaimStatus,
    fetchMintRequest,
    fetchMintQueue,
    fetchProjectsList,
    handleClose: hideTradeDialog,
    mintNFT,
    setMintNFTInProgress,
    showMessage,
};

export default connect(stateToProps, actionToProps)(ClaimButton);

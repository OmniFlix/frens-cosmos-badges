import { urlFetchMintQueue, urlFetchMintRequest, urlFetchProjectsList, urlMintNFT } from '../constants/url';
import Axios from 'axios';
import {
    MINT_NFT_ERROR,
    MINT_NFT_IN_PROGRESS,
    MINT_NFT_SUCCESS,
    MINT_QUEUE_FETCH_ERROR,
    MINT_QUEUE_FETCH_IN_PROGRESS,
    MINT_QUEUE_FETCH_SUCCESS,
    MINT_REQUEST_FETCH_ERROR,
    MINT_REQUEST_FETCH_IN_PROGRESS,
    MINT_REQUEST_FETCH_SUCCESS,
    PROJECTS_LIST_FETCH_ERROR,
    PROJECTS_LIST_FETCH_IN_PROGRESS,
    PROJECTS_LIST_FETCH_SUCCESS,
    NFT_FETCH_ERROR,
    NFT_FETCH_IN_PROGRESS,
    NFT_FETCH_SUCCESS,
} from '../constants/mint';
import { urlNFT } from '../constants/restURL';

const fetchProjectsListInProgress = () => {
    return {
        type: PROJECTS_LIST_FETCH_IN_PROGRESS,
    };
};

const fetchProjectsListSuccess = (value) => {
    return {
        type: PROJECTS_LIST_FETCH_SUCCESS,
        value,
        variant: 'success',
    };
};

const fetchProjectsListError = (message) => {
    return {
        type: PROJECTS_LIST_FETCH_ERROR,
        message,
        variant: 'error',
    };
};

export const fetchProjectsList = (address, cb) => (dispatch) => {
    dispatch(fetchProjectsListInProgress());

    const URL = urlFetchProjectsList(address);
    Axios.get(URL, {
        headers: {
            Accept: 'application/json, text/plain, */*',
        },
    })
        .then((res) => {
            dispatch(fetchProjectsListSuccess(res.data && res.data.result && res.data.result.list,
                res.data && res.data.result && res.data.result.count));
            if (cb) {
                cb(res.data && res.data.result && res.data.result.list);
            }
        })
        .catch((error) => {
            dispatch(fetchProjectsListError(
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : 'Failed!',
            ));
            if (cb) {
                cb(null);
            }
        });
};

const mintNFTInProgress = () => {
    return {
        type: MINT_NFT_IN_PROGRESS,
    };
};

const mintNFTSuccess = (value) => {
    return {
        type: MINT_NFT_SUCCESS,
        value,
    };
};

const mintNFTError = (message) => {
    return {
        type: MINT_NFT_ERROR,
        message,
        variant: 'error',
    };
};

export const mintNFT = (projectID, data, cb) => (dispatch) => {
    dispatch(mintNFTInProgress());

    const URL = urlMintNFT(projectID);
    Axios.post(URL, data, {
        headers: {
            Accept: 'application/json, text/plain, */*',
        },
    })
        .then((res) => {
            dispatch(mintNFTSuccess(res.data && res.data.result));
            if (cb) {
                cb(res.data && res.data.result);
            }
        })
        .catch((error) => {
            dispatch(mintNFTError(
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : 'Failed!',
            ));
            if (cb) {
                cb(null);
            }
        });
};

const fetchMintRequestInProgress = () => {
    return {
        type: MINT_REQUEST_FETCH_IN_PROGRESS,
    };
};

const fetchMintRequestSuccess = (value, projectID) => {
    return {
        type: MINT_REQUEST_FETCH_SUCCESS,
        value,
        projectID,
    };
};

const fetchMintRequestError = (message) => {
    return {
        type: MINT_REQUEST_FETCH_ERROR,
        message,
        variant: 'error',
    };
};

export const fetchMintRequest = (address, projectID, cb) => (dispatch) => {
    dispatch(fetchMintRequestInProgress());

    const URL = urlFetchMintRequest(address, projectID);
    Axios.get(URL, {
        headers: {
            Accept: 'application/json, text/plain, */*',
        },
    })
        .then((res) => {
            dispatch(fetchMintRequestSuccess(res.data && res.data.result && res.data.result.list, projectID));
            if (cb) {
                cb(res.data && res.data.result && res.data.result.list);
            }
        })
        .catch((error) => {
            dispatch(fetchMintRequestError(
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : 'Failed!',
            ));
            if (cb) {
                cb(null);
            }
        });
};

const fetchMintQueueInProgress = () => {
    return {
        type: MINT_QUEUE_FETCH_IN_PROGRESS,
    };
};

const fetchMintQueueSuccess = (value, projectID) => {
    return {
        type: MINT_QUEUE_FETCH_SUCCESS,
        value,
        projectID,
    };
};

const fetchMintQueueError = (message) => {
    return {
        type: MINT_QUEUE_FETCH_ERROR,
        message,
        variant: 'error',
    };
};

export const fetchMintQueue = (address, projectID, cb) => (dispatch) => {
    dispatch(fetchMintQueueInProgress());

    const URL = urlFetchMintQueue(address, projectID);
    Axios.get(URL, {
        headers: {
            Accept: 'application/json, text/plain, */*',
        },
    })
        .then((res) => {
            dispatch(fetchMintQueueSuccess(res.data && res.data.result, projectID));
            if (cb) {
                cb(res.data && res.data.result);
            }
        })
        .catch((error) => {
            dispatch(fetchMintQueueError(
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : 'Failed!',
            ));
            if (cb) {
                cb(null);
            }
        });
};

const fetchNFTInProgress = () => {
    return {
        type: NFT_FETCH_IN_PROGRESS,
    };
};

const fetchNFTSuccess = (value, nftID) => {
    return {
        type: NFT_FETCH_SUCCESS,
        value,
        nftID,
    };
};

const fetchNFTError = (message) => {
    return {
        type: NFT_FETCH_ERROR,
        message,
        variant: 'error',
    };
};

export const fetchNFT = (nftID) => (dispatch) => {
    dispatch(fetchNFTInProgress());

    const URL = urlNFT(nftID);
    Axios.get(URL, {
        headers: {
            Accept: 'application/json, text/plain, */*',
        },
    })
        .then((res) => {
            dispatch(fetchNFTSuccess(res.data && res.data.result, nftID));
        })
        .catch((error) => {
            dispatch(fetchNFTError(
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : 'Failed!',
            ));
        });
};

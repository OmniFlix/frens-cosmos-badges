import { combineReducers } from 'redux';
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
import { DISCONNECT_SET } from '../constants/wallet';
import { TRADE_DIALOG_HIDE } from '../constants/home';

const projectsList = (state = {
    inProgress: false,
    value: [],
}, action) => {
    switch (action.type) {
    case PROJECTS_LIST_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case PROJECTS_LIST_FETCH_SUCCESS:
        return {
            inProgress: false,
            value: action.value,
        };
    case PROJECTS_LIST_FETCH_ERROR:
        return {
            ...state,
            inProgress: false,
        };
    default:
        return state;
    }
};

const nftMint = (state = {
    inProgress: false,
    value: {},
}, action) => {
    switch (action.type) {
    case MINT_NFT_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case MINT_NFT_SUCCESS:
        return {
            inProgress: false,
            value: action.value,
        };
    case MINT_NFT_ERROR:
        return {
            ...state,
            inProgress: false,
        };
    case TRADE_DIALOG_HIDE:
    case DISCONNECT_SET:
        return {
            ...state,
            value: {},
        };
    default:
        return state;
    }
};

const mintRequests = (state = {
    inProgress: false,
    value: {},
}, action) => {
    switch (action.type) {
    case MINT_REQUEST_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case MINT_REQUEST_FETCH_SUCCESS: {
        const value = { ...state.value };
        value[action.projectID] = action.value;

        return {
            ...state,
            inProgress: false,
            value: value,
        };
    }
    case MINT_REQUEST_FETCH_ERROR:
        return {
            ...state,
            inProgress: false,
        };
    case DISCONNECT_SET:
        return {
            ...state,
            value: {},
        };
    default:
        return state;
    }
};

const mintQueue = (state = {
    inProgress: false,
    value: {},
}, action) => {
    switch (action.type) {
    case MINT_QUEUE_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case MINT_QUEUE_FETCH_SUCCESS: {
        const value = { ...state.value };
        value[action.projectID] = action.value;

        return {
            ...state,
            inProgress: false,
            value: value,
        };
    }
    case MINT_QUEUE_FETCH_ERROR:
        return {
            ...state,
            inProgress: false,
        };
    case DISCONNECT_SET:
        return {
            ...state,
            value: {},
        };
    default:
        return state;
    }
};

const nfts = (state = {
    inProgress: false,
    value: {},
}, action) => {
    switch (action.type) {
    case NFT_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case NFT_FETCH_SUCCESS: {
        const value = { ...state.value };
        value[action.nftID] = action.value;

        return {
            ...state,
            inProgress: false,
            value: value,
        };
    }
    case NFT_FETCH_ERROR:
        return {
            ...state,
            inProgress: false,
        };
    case DISCONNECT_SET:
        return {
            ...state,
            value: {},
        };
    default:
        return state;
    }
};

export default combineReducers({
    projectsList,
    nftMint,
    mintRequests,
    mintQueue,
    nfts,
});

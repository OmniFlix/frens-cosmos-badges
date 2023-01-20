import { config } from '../config';

const URL = config.REST_URL;
const DATA_LAYER = config.DATA_LAYER;

export const urlFetchBalance = (address) => `${URL}/bank/balances/${address}`;
export const urlNFT = (nftID) => `${URL}/nfts/${nftID}`;
export const urlCheckNFTClaim = (denom, address) => {
    const params = ['statuses[]=BURNED', 'statuses[]=CREATED'];
    if (denom) {
        params.push(`denomId=${denom}`);
    }
    if (address) {
        params.push(`owner=${address}`);
    }

    return `${DATA_LAYER}/nfts?${params.join('&')}`;
};

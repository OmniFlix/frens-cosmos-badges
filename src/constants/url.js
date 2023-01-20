const URL = 'https://dev-api-frens.ctlabs.in';

export const urlFetchMintRequest = (address, projectID) => `${URL}/${address}/projects/${projectID}/mint-requests`;
export const urlFetchMintQueue = (address, projectID) => `${URL}/${address}/projects/${projectID}/mint-queue`;
export const urlMintNFT = (projectID) => `${URL}/projects/${projectID}/mint-requests`;

export const urlFetchProjectsList = (address) => {
    const params = [];
    if (address) {
        params.push(`address=${address}`);
    }

    return `${URL}/projects?${params.join('&')}`;
};

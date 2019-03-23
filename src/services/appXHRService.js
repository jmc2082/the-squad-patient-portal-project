import axios from 'axios';

const api_url = `http:localhost:5500/`;
// const api_prefix = `api_v1`;

let appXHRService = {};

async function onGETData(args) {
    return await axios.get(`${api_url}${args.endpoint}`)
}

async function onPOSTData(args) {
    return await axios.get(`${api_url}${args.endpoint}`, args.payload);
}

async function onPUTData(args) {
    return await axios.get(`${api_url}${args.endpoint}`, args.payload);
}

async function onDELETEData(args) {
    return await axios.get(`${api_url}${args.endpoint}`, args.payload);
}

appXHRService.onGETData = args => {
    return onGETData(args);
};

appXHRService.onPOSTData = args => {
    return onPOSTData(args);
};

appXHRService.onPUTData = args => {
    return onPUTData(args);
};

appXHRService.onDELETEData = args => {
    return onDELETEData(args);
};

export default appXHRService;

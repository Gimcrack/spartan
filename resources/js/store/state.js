

export const STORAGE_KEY = process.env.APP_NAME || 'spartan';

import ls from 'localforage';
ls.config({
    driver : ls.INDEXEDDB,
    name : STORAGE_KEY,
    storeName : STORAGE_KEY
});

const default_state = {
    count : 0,
    name : 'Jeremy Bloomstrom',
};

const load_data = async ( ) => {
    if ( typeof await ls.getItem('data') === 'undefined' )
        await ls.setItem('data',default_state);

    return ls.getItem('data');
};

let data;
load_data().then(val => data = val);

export default {

    data,
    intervals : {},

    timeouts : {},
}
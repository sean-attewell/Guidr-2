import * as types from '../actions/actionTypes';

export function adventuresReducer(adventuresArray = [], action) {
    switch (action.type) {
        case types.GET_ADVENTURES: // if action type is this
            return action.payload; // replace state with array of all objects
        case types.ADD_ADVENTURE:
            // return adventuresArray.concat(action.payload); this works
            return adventuresArray;
        case types.DELETE_ADVENTURE:
            return adventuresArray; // server deletes in background...
        case types.UPDATE_ADVENTURE:
            return adventuresArray // server deletes in background...
        default:
            return adventuresArray;
    }
}

// Q is whether need to get again to get updated server response.
// when server deletes and updates in the background.
// could manually filter out deleted here with logic to reflect the server,
// but that seems silly.
// if I need to, delete payload is the ID to filter with
// and update payload is specifc updated adventure 

// ooo maybe dispatch within the action creator to call get...
// same way you did the spinner.

export function spinner(isOn = false, action) {
    switch (action.type) {
        case types.SPINNER_ON:
            return true;
        case types.SPINNER_OFF:
            return false;
        default:
            return isOn;
    }
}

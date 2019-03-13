import * as types from './actionTypes';
import axios from 'axios';


// if beef with CORS then swap string back in
const adventureURL = 'https://guidr2.herokuapp.com/adventures'


export const getAdventuresAsync = () => dispatch => {
    dispatch(spinnerOn());
    axios.get(adventureURL)
        .then(res => {
            dispatch({ type: types.GET_ADVENTURES, payload: res.data });
            dispatch(spinnerOff());
        });
};

// export const addAdventureAsync = newAdventure => dispatch => {
//     dispatch(spinnerOn());
//     axios.post(adventureURL, newAdventure)
//         .then(res => {
//             dispatch({ type: types.ADD_ADVENTURE, payload: res.data });
//             dispatch(spinnerOff());
//         })
//         .then(
//             axios.get(adventureURL)
//             .then(res => {
//                 dispatch({ type: types.GET_ADVENTURES, payload: res.data });
//             })
//         )
// };

// export const addAdventureAsync = newAdventure => dispatch => {
//     axios.post(adventureURL, newAdventure)
//         .then(res => {
//             dispatch({ type: types.ADD_ADVENTURE, payload: res.data });
//         })
//         .then(
//             dispatch(getAdventuresAsync())
//         )
// };

export const addAdventureAsync = newAdventure => dispatch => {
    axios.post(adventureURL, newAdventure)
        .then(res => {
            dispatch({ type: types.ADD_ADVENTURE, payload: res.data });
        });
    setTimeout(function() {
        dispatch(getAdventuresAsync())
    }, 200);
};





export const deleteAdventureAsync = id => dispatch => {
    axios.delete(`${adventureURL}/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_ADVENTURE, payload: id });
        });
    setTimeout(function() {
        dispatch(getAdventuresAsync())
    }, 200);
};


export const updateAdventureAsync = (id, updatedAdventure) => dispatch => {
    axios.put(`${adventureURL}/${id}`, updatedAdventure)
        .then(res => {
            dispatch({ type: types.UPDATE_ADVENTURE, payload: res.data });
        });
    setTimeout(function() {
        dispatch(getAdventuresAsync())
    }, 500);
};

export function spinnerOn() {
    return {
        type: types.SPINNER_ON,
    };
}

export function spinnerOff() {
    return {
        type: types.SPINNER_OFF,
    };
}



// could have separate addAdventure or deleteAdventure AC like in quotes lecture example to break down payload if necessary.
// But all they do is return type and payload into the dispatch method above. Kind of pointless.
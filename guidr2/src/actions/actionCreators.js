import * as types from './actionTypes';
import axios from 'axios';

// maybe URLS in variables later


export const getAdventuresAsync = () => dispatch => {
    dispatch(spinnerOn());
    axios.get('https://guidr2.herokuapp.com/adventures')
        .then(res => {
            dispatch({ type: types.GET_ADVENTURES, payload: res.data });
            dispatch(spinnerOff());
        });
};

export const addAdventureAsync = adventure => dispatch => {
    dispatch(spinnerOn());
    axios.post(`https://guidr2.herokuapp.com/adventures`, adventure)
        .then(res => {
            // console.log(adventure);
            // console.log(res.data);
            dispatch({ type: types.ADD_ADVENTURE, payload: res.data });
            dispatch(spinnerOff());
        });
};

export const deleteAdventureAsync = id => dispatch => {
    dispatch(spinnerOn());
    axios.delete(`https://guidr2.herokuapp.com/adventures/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_ADVENTURE, payload: id });
            dispatch(spinnerOff());
        });
};

export const updateAdventureAsync = updatedAdventure => dispatch => {
    dispatch(spinnerOn());
    axios.put(`https://guidr2.herokuapp.com/adventures/${updatedAdventure.id}`, updatedAdventure.updatedInfo)
        .then(res => {
            dispatch({ type: types.UPDATE_ADVENTURE, payload: res.data });
            dispatch(spinnerOff());
        });
};

export function spinnerOn() {
    return {
        type: SPINNER_ON,
    };
}

export function spinnerOff() {
    return {
        type: SPINNER_OFF,
    };
}



// could have separate addAdventure or deleteAdventure AC like in quotes lecture example to break down payload if necessary.
// But all they do is return type and payload into the dispatch method above. Kind of pointless.
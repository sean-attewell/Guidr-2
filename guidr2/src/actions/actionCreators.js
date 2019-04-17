import * as types from './actionTypes';
import axios from 'axios';

const adventureURL = 'http://localhost:3500/api/adventures'

// Asynchronous 
export const getAdventuresAsync = () => dispatch => {
  dispatch(spinnerOn());
  axios.get(adventureURL, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(res => {
      dispatch({ type: types.GET_ADVENTURES, payload: res.data });
      dispatch(spinnerOff());
    });
};

export const addAdventureAsync = newAdventure => dispatch => {
  axios.post(adventureURL, newAdventure)
    .then(res => {
      dispatch({ type: types.ADD_ADVENTURE, payload: res.data });
      dispatch(getAdventuresAsync())
    });
};

export const deleteAdventureAsync = id => dispatch => {
  axios.delete(`${adventureURL}/${id}`)
    .then(res => {
      dispatch({ type: types.DELETE_ADVENTURE, payload: id });
      dispatch(getAdventuresAsync())
    });
};

export const updateAdventureAsync = (id, updatedAdventure) => dispatch => {
  axios.put(`${adventureURL}/${id}`, updatedAdventure)
    .then(res => {
      dispatch({ type: types.UPDATE_ADVENTURE, payload: res.data });
      dispatch(getAdventuresAsync());
    });
};


// Synchronous

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

export function setAdventureForEdit(id) {
  return {
    type: types.SET_ADVENTURE_FOR_EDIT,
    payload: id
  }
}

export function clearAdventureForEdit() {
  return {
    type: types.CLEAR_ADVENTURE_FOR_EDIT,
  }
}

export function setLoggedInUser(id) {
  return {
    type: types.SET_LOGGED_IN_USER,
    payload: id
  }
}

export function clearLoggedInUser() {
  return {
    type: types.CLEAR_LOGGED_IN_USER,
  }
}

// The ol' workaround. Completely unnecessary:

// export const deleteAdventureAsync = id => dispatch => {
//     axios.delete(`${adventureURL}/${id}`)
//         .then(res => {
//             dispatch({ type: types.DELETE_ADVENTURE, payload: id });
//         });
//     setTimeout(function() {
//         dispatch(getAdventuresAsync())
//     }, 200);
// };
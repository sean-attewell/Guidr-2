import * as types from '../actions/actionTypes';



export function adventuresReducer(adventuresArray = [], action) {
  switch (action.type) {
    case types.GET_ADVENTURES: // if action type is this
      return action.payload; // replace state with array of all objects
    case types.ADD_ADVENTURE:
      return adventuresArray; //server adds in background...
    case types.DELETE_ADVENTURE:
      return adventuresArray; // server deletes in background...
    case types.UPDATE_ADVENTURE:
      return adventuresArray // server updates in background...
    default:
      return adventuresArray;
  }
}

export function adventureBeingEditedReducer(id = null, action) {
  switch (action.type) {
    case types.SET_ADVENTURE_FOR_EDIT:
      return action.payload;
    case types.CLEAR_ADVENTURE_FOR_EDIT:
      return null;
    default:
      return id;
  }
}

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

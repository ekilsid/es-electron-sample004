import { push, replace } from 'connected-react-router';

// #############
//  action type
// #############
const CHANGE_SIDE = 'CHANGE_SIDE';

const initialState = {
  side: 'func1'
};

// #############
// reducer
// #############
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  console.log('[Header module][reducer] type -> ' + action.type);
  console.dir(state);

  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      console.log('LOCATION_CHANGE is called');
      console.log(action);
      // When I don't use <HashRouter>, this line succeed, but screen refresh has problem.
      //newState.side = action.payload.location.pathname.split('/').pop();
      // When I use <HashRouter>, we have to get path from hash
      newState.side = action.payload.location.hash.split('#/').pop();
      return newState;
    }
    case CHANGE_SIDE: {
      console.log(
        '[Header module][reducer] change side -> ' + action.payload.side
      );
      replace('/' + action.payload.side);

      newState.side = action.payload.side;
      return newState;
    }
    default: {
      return state;
    }
  }
}

// #############
// action-creator
// #############
export function changeSide(side) {
  console.log('[Header module][action] change side -> ' + side);

  //replace('/' + side);
  //push('/' + side);

  return {
    type: CHANGE_SIDE,
    payload: { side: side }
  };
}

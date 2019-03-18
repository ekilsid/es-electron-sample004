// #############
//  action type
// #############

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
      console.dir(action);
      // When I don't use <HashRouter>, this line succeed, but screen refresh has problem.
      //newState.side = action.payload.location.pathname.split('/').pop();
      // When I use <HashRouter>, we have to get path from hash
      newState.side = action.payload.location.hash.split('#/').pop();
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

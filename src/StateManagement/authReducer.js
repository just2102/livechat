const TOGGLE_IS_AUTHORIZING = "TOGGLE_IS_AUTHORIZING";

let initialState = {
  user: null,
  isAuthorizing: null,
};

export const toggleIsAuthorizing = (isAuthorizing) => ({type: TOGGLE_IS_AUTHORIZING,isAuthorizing});

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_AUTHORIZING:
      return {
        ...state,
        isAuthorizing: action.isAuthorizing,
      };

    default:
      return state;
  }
};

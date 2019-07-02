/*import {
  FINISHED_TUTORIAL,
  CREATE_SHARE_LINK,
  CREATE_SHARE_LINK_SUCCESS,
  CREATE_SHARE_LINK_ERROR,
  FETCH_SHARE_LINK,
  FETCH_SHARE_LINK_SUCCESS,
  FETCH_SHARE_LINK_ERROR,
  FETCH_PROMO_CODES,
  FETCH_PROMO_CODES_SUCCESS,
  FETCH_PROMO_CODES_ERROR,
  SEND_LINK,
  SEND_LINK_SUCCESS,
  SEND_LINK_ERROR
} from "../types";*/

const initialState = {
  isLoggedIn: false,
  user: {},
  session: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return {
        ...state,
        user: user
      };
    case "SET_SESSION":
      const { session } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        session: session
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;

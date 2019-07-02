export const setUser = user => dispatch => dispatch({
  type: 'SET_USER',
  payload: {
    user: user
  }
})

export const setSession = session => dispatch => dispatch({
  type: 'SET_SESSION',
  payload: {
    session: session
  }
})


export const logout = () => dispatch => dispatch({
  type: 'LOGOUT'
})

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
  } from '../types';
  
  export const setFinishedTutorial = () => {
    return dispatch => {
      dispatch({
        type: FINISHED_TUTORIAL
      });
    };
  };


  export const sendLink = (number) => {
    return async (dispatch, getState, { numbers }) => {
      function onSuccess(data) {
        dispatch({
          type: SEND_LINK_SUCCESS,
        });
        return data;
      }
      function onError(error) {
        dispatch({ type: SEND_LINK_ERROR, error });
        console.log(error);
        return error;
      }
      try {
        dispatch({
          type: SEND_LINK,
        });
        await numbers({
          url: `/send`,
          data: {
            number: number
          },
          method: 'POST'
        });
  
        onSuccess();
      } catch (err) {
        onError(err);
      }
    };
  };*/

import {
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  LOGOUT,
} from "../actions/Types";

const initialState = {
  access: localStorage.getItem("access"), //estas dos variables lo que hacen es llamar del localstorage y ver si existen para agarrar las variables
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
//   user: null,
  loading: false,
  //esto es lo que aparece en redux
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: localStorage.getItem("access"),
        refresh: localStorage.getItem("refresh"),
      };

    // case SIGNUP_SUCCESS:
    // case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case REFRESH_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        // user: null,
      };

    default:
        return state;
  }
}

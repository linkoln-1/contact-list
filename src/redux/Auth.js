const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  auth: false,
  loadingLogin: false,
  error: false,
  token: "",
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login/start":
      return {
        ...state,
        loadingLogin: true,
        error: false,
        auth: false,
      };
    case "auth/login/success":
      return {
        ...state,
        user: action.payload,
        loadingLogin: false,
        auth: true,
      };
    case "auth/login/error":
      return {
        ...state,
        error: true,
        loadingLogin: false,
        auth: false,
      };
    case "auth/reset":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export const initialStore = () => {
  return {
    message: null,
    user: [],
    isAuthenticated: localStorage.getItem("token") ? true : false,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "login_success":
      return {
        ...store,
        isAuthenticated: true,
        token: action.payload,
        refreshToken: action.payload,
      };

    case "logout":
      return {
        ...store,
        isAuthenticated: false,
        token: null,
        refreshToken: null,
      };

    default:
      console.error("Unknown action dispatched:", action);
      throw Error("Unknown action.");
  }
}

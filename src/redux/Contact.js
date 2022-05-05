const initialState = {
  contact: [],
  filter: "",
  loading: false,
  loadingContact: false,
};

export const contact = (state = initialState, action) => {
  switch (action.type) {
    case "contact/loading/start":
      return {
        ...state,
        loadingContact: true,
        loading: true,
      };
    case "contact/loading/success":
      return {
        ...state,
        contact: action.payload,
        loading: false,
        loadingContact: false,
      };
    case "contact/add/start":
      return {
        ...state,
        loadingContact: true,
        loading: true,
      };
    case "contact/add/success":
      return {
        ...state,
        loading: false,
        loadingContact: false,
        contact: [...state.contact, action.payload],
      };
    case "contact/delete/start":
      return {
        ...state,
        loading: true,
        loadingContact: true,
      };
    case "contact/delete/success":
      return {
        ...state,
        loading: false,
        loadingContact: false,
        contact: state.contact.filter((item) => {
          if (item.id !== action.payload) {
            return true;
          }
          return false;
        }),
      };
    case "filter/set":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

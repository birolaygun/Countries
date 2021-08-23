const INITIAL_STATE = {
  isLoading: false,
  countries: [],
  message: "",
  ülke: [],

  geçici: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch (action.type) {

        case "GET_COUNTRIES_LOADING":
      return { ...state, isLoading: true };

    case "GET_COUNTRIES_SUCCES":
      return { ...state, countries: action.payload, isLoading: false };

    case "GET_COUNTRIES_ERROR":
      return { ...state, message: action.payload, isLoading: false };


    default:
      return state;
  }
  

}; 
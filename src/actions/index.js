import axios from 'axios'

export const getCountries = () => dispatch =>  {

dispatch({ type: "GET_COUNTRIES_LOADING" });

    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => dispatch({ type: "GET_COUNTRIES_SUCCES", payload:response.data}))
      .catch((error) => dispatch({ type: "GET_COUNTRIES_ERROR", payload:error}));

    
}
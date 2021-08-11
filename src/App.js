import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="App">
      <h1>Countries</h1>
      {countries.map((country) => {
        return (
          <Card
            className="mx-auto my-2"
            style={{ maxWidth: "300px" }}
            key={country.name}
          >
            <CardImg top src={country.flag} alt={country.name} />
            <CardBody style={{ backgroundColor: " rgb(240, 240, 240)" }}>
              <CardTitle tag="h5">{country.name}</CardTitle>
              <CardText>Başkent: {country.capital}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

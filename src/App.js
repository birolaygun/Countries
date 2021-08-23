import React, { useEffect, useState } from "react";
import "./styles.css";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { connect } from "react-redux";
import { getCountries } from "./actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Second from './Second'

const App = (props) => {

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <div className="App bg-primary">
            <div className=" bg-primary" style={{height:"6px"}}> </div>
            <h1 className="başlık">Countries</h1>
            {props.isLoading ? (
              <h1>Yükleniyor...</h1>
            ) : (
              props.countries.countries.map((country) => {
                return (
                  <Link
                    key={country.alpha3Code}
                    onClick={(e) => {
                      props.countries.geçici = country.alpha3Code;

                      props.countries.ülke = props.countries.countries.find(
                        (item) => item.alpha3Code === props.countries.geçici
                      );

                      console.log(props.countries.geçici);

                      console.log(props.countries);
                    }}
                    to={`/${country.alpha3Code}`}
                  >
                    <Card
                      className="mx-auto my-2"
                      style={{ maxWidth: "300px" }}
                    >
                      <CardBody
                        style={{ backgroundColor: " rgb(240, 240, 240)" }}
                      >
                         <h3 className=" name ">
                           {country.name}  
                        </h3> 
                      </CardBody>
                    </Card>
                  </Link>
                );
              })
            )}
          </div>
        )}
      />

      <Route path={`/${props.countries.geçici}`} component={Second} />
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { countries: state };
};

export default connect(mapStateToProps, { getCountries })(App);

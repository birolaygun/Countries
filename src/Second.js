import React from 'react'
import { connect } from "react-redux";

const Second = (props) => {
  
  return (
    <div>
      <h2 classname="text-center"> {props.countries.ülke.name} </h2>
      <img
        style={{ width: "300px" }}
        src={props.countries.ülke.flag}
        alt={props.countries.ülke.name}
      />
      <h3> Başkent: {props.countries.ülke.capital}</h3>
    </div>
  );

};

const mapStateToProps = (state) => {
  return { countries: state };
};

export default connect(mapStateToProps)(Second);
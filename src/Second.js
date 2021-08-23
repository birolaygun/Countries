import React from 'react'
import { connect } from "react-redux";

const Second = (props) => {
  
  return (
    <div className="d-flex detay ">
      <div style={{ height: "6px", background_color: " rgb(0, 204, 255)" }}>
        {" "}
      </div>{" "}
      <h2 className="başlık mx-auto başlıkÖzel p-2"> {props.countries.ülke.name} </h2>
      <img
        style={{ width: "300px" }}
        src={props.countries.ülke.flag}
        alt={props.countries.ülke.name}
      />
      <h3 className="mt-2" > Başkent: {props.countries.ülke.capital}</h3>
    </div>
  );

};

const mapStateToProps = (state) => {
  return { countries: state };
};

export default connect(mapStateToProps)(Second);
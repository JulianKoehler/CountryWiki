import React from "react";
import { Link } from "react-router-dom";
import Country from "../../models/countryData";

const BorderCountries: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div>
      <span>
        Border Countries:{" "}
        {country.borders.map(border => {
          return (
            <Link to={`/countries/${border}`}>
              <button>{border}</button>
            </Link>
          );
        })}
      </span>
    </div>
  );
};

export default BorderCountries;

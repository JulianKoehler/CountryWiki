import React from "react";
import Country from "../../models/countryData";

const SecondInfoBlock: React.FC<{ country: Country }> = ({ country }) => {
  function getCurrency() {
    for (const currency in country.currencies) {
      return `${country.currencies[currency].name}, ${country.currencies[currency].symbol}`;
    }
  }

  function getLanguages() {
    const languages = [];
    for (const lang in country.languages) {
      languages.push(country.languages[lang]);
    }
    return languages;
  }

  const languages = getLanguages().map(lang => {
    if (getLanguages().indexOf(lang) === getLanguages().length - 1) return lang;
    else return `${lang}, `;
  });

  const domains = country.tld.map(domain => {
    if (country.tld.indexOf(domain) === country.tld.length - 1) return domain;
    else return `${domain}, `;
  });

  return (
    <div>
      <p>
        <span>Top Level Domain: </span> {domains}
      </p>
      <p>
        <span>Currencies: </span> {getCurrency()}
      </p>
      <p>
        <span>Languages: </span> {languages}
      </p>
    </div>
  );
};

export default SecondInfoBlock;

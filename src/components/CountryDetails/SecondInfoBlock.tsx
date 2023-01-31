import React from "react";
import Country from "../../models/countryData";

const SecondInfoBlock = ({ country }: { country: Country }) => {
  function getCurrencies() {
    for (const currency in country.currencies) {
      return `${country.currencies[currency].name}`;
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
    const isLastLanguage = getLanguages().indexOf(lang) === getLanguages().length - 1;
    if (isLastLanguage) return lang;
    else return `${lang}, `;
  });

  const domains = country.tld?.map(domain => {
    const isLastDomain = country.tld.indexOf(domain) === country.tld.length - 1;
    if (isLastDomain) return domain;
    else return `${domain}, `;
  });

  return (
    <div className="second-info-block">
      <p>
        <span>Top Level Domain: </span> {domains ? domains : "This country has no domains"}
      </p>
      <p>
        <span>Currencies: </span> {country.currencies ? getCurrencies() : "No currencies"}
      </p>
      <p>
        <span>Languages: </span> {country.languages ? languages : "No languages"}
      </p>
    </div>
  );
};

export default SecondInfoBlock;

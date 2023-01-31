import Country from "../../models/countryData";
import formatNumber from "../../utils/formatNumber";

const FirstInfoBlock = ({ country }: { country: Country }) => {
  /** Short explaination for the function getNativeName. The structure of the country object is different
   * in detail for each country. One Country may has only one property in the "nativeName" object which is
   * in itself a property of its parent object "name". Another country may has multiple native Names, for instance
   * Belgium which has 3. Mostly the last one is the "real" one so to say. That's why I decided to take always
   * the last entry in the array I get back with Object.keys().
   */
  function getNativeName() {
    const nativeNames = Object.keys(country.name.nativeName);
    return country.name.nativeName[nativeNames[nativeNames.length - 1]].common;
  }

  const capitals = country.capital?.map(city => {
    const isLastCity = country.capital.indexOf(city) === country.capital.length - 1;
    if (isLastCity) return city;
    else return `${city}, `;
  });

  return (
    <div className="first-info-block">
      <p>
        <span>Native Name:</span> {country.name.nativeName ? getNativeName() : country.name.common}
      </p>
      <p>
        <span>Population:</span> {formatNumber(country.population)}
      </p>
      <p>
        <span>Region:</span> {country.region ? country.region : "This country has no region"}
      </p>
      <p>
        <span>Sub Region:</span> {country.subregion ? country.subregion : "This country has no subregion"}
      </p>
      <p>
        <span>Capital:</span> {country.capital ? capitals : "This country has no capital"}
      </p>
    </div>
  );
};

export default FirstInfoBlock;

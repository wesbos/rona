import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing: {selectedCountry}</h2>
      <select
        onChange={e => setSelectedCountry(countries.countries[e.target.value])}
        defaultValue={selectedCountry}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            // selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={country}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useCountry } from '../../contexts';
import { StyledCountryList } from './style';

const AllCountries = () => {
  const { countries, loading, error } = useCountry();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <StyledCountryList>
      <h1>Welcome to Country Info</h1>
      <ul>
        {countries.map(country => (
          <li key={country.countryCode}>
            <Link to={`/countries/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </StyledCountryList>
  );
};

export default AllCountries;

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CountryProvider } from '../contexts';
import AllCountries from '../components/allCountries';
import CountryInfo from '../components/countryInfo'

const RoutesComponent = () => {
  return (
    <CountryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/countries/:countryCode" element={<CountryInfo />} />
        </Routes>
      </Router>
    </CountryProvider>
  );
};

export default RoutesComponent;


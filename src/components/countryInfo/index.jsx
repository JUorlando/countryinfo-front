import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StyledCountryInfo } from "./style";

const CountryInfo = () => {
  const { countryCode } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/api/countries/${countryCode}`
        );
        setCountryInfo(response.data);
      } catch (err) {
        setError("Failed to fetch country information");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [countryCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <StyledCountryInfo>
      <h1>{countryInfo?.commonName}</h1>

      <h3>Flag:</h3>
      <img
        src={countryInfo?.flagUrl}
        alt={`${countryInfo?.commonName} Flag`}
      />

      <h3>Official Name: {countryInfo?.officialName}</h3>

      <h3>Borders: </h3>
      <ul>
        {countryInfo?.borders?.map((pop) => (
          <li key={pop.commonName}>
            <Link to={`/countries/${pop.countryCode}`}>{pop.commonName}</Link>
          </li>
        ))}
      </ul>

      <h3>Region: {countryInfo?.region}</h3>

      <h3>Population Over the Years:</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={countryInfo?.population.map((pop) => ({
            year: pop.year,
            population: pop.value,
          }))}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledCountryInfo>
  );
};

export default CountryInfo;

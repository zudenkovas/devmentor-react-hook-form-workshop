import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Container, TextField } from "@mui/material";
import { Country, getCountries } from "api";
import { PageLoader } from "components/Loader";
import CountryCard from "components/CountryCard";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);
  const [searchResult, setSearchResult] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const countriesFiltered =
    data?.filter((country) => country.countryInfo._id) || [];

  useEffect(() => {
    if (countriesFiltered?.length) {
      setSearchResult(countriesFiltered);
    }
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data?.length) {
      const query = e.target.value.toLowerCase();
      const searchResult = countriesFiltered?.filter((country) =>
        country.country.toLowerCase().includes(query)
      );

      setSearchQuery(query);
      setSearchResult(searchResult);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="md">
      <TextField
        label="Search"
        placeholder="Search country"
        sx={{ margin: "20px 0" }}
        fullWidth
        onChange={handleSearch}
        value={searchQuery}
      />
      <Container
        disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "20px",
        }}
      >
        {searchResult?.map((country) => (
          <CountryCard {...country} key={country.country} />
        ))}
      </Container>
    </Container>
  );
};

export default CountriesContainer;

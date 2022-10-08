import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { getCountry } from "api";
import { PageLoader } from "components/Loader";

const CountryContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["country", id],
    () => getCountry(id || ""),
    {
      enabled: !!id,
    }
  );

  const {
    country,
    countryInfo,
    cases,
    active,
    activePerOneMillion,
    casesPerOneMillion,
    deaths,
    deathsPerOneMillion,
    recovered,
    recoveredPerOneMillion,
    tests,
    testsPerOneMillion,
  } = data || {};

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Container
        disableGutters
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          {country}
        </Typography>
        <img src={countryInfo?.flag} />
      </Container>
      <div>
        <List dense>
          <ListItem>
            <ListItemText primary={`Active cases: ${active}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Active cases per one million: ${activePerOneMillion}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Cases: ${cases}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Cases per one million: ${casesPerOneMillion}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Deaths: ${deaths}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Deaths per one million: ${deathsPerOneMillion}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Recovered: ${recovered}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Recovered per one million: ${recoveredPerOneMillion}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Tests: ${tests}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Tests per one million: ${testsPerOneMillion}`}
            />
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default CountryContainer;

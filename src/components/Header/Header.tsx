import { AppBar, Container } from "@mui/material";
import { NavLink } from "components/Link";
import { RouteKey } from "navigation";

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "50px",
        }}
      >
        <NavLink to={RouteKey.Index} color="inherit" underline="none">
          Home
        </NavLink>

        <div>
          <NavLink to={RouteKey.Countries} color="inherit" underline="none">
            Countries
          </NavLink>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;

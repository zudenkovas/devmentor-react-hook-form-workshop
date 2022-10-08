import { Typography, Link } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  font-family: "Space Grotesk";
`;

function App() {
  return (
    <Wrapper>
      <Typography variant="h1">
        <StyledLink
          color="inherit"
          href="https://www.devmentor.online"
          underline="none"
          target="_blank"
        >
          dev<span>.</span>mentor
        </StyledLink>
      </Typography>
    </Wrapper>
  );
}

export default App;

import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageHeading } from "components/common/PageHeading";
import { AboutApp } from "components/top/AboutApp";
import { Button } from "components/common/Button";

export const Home: React.VFC = () => {
  return (
    <Container>
      <PageHeading>Home</PageHeading>
      <AboutApp />
      <Link to="/q1">
        <StyledButton>
          <Button>動画を探す</Button>
        </StyledButton>
      </Link>
      <Link to="/ch-q1">
        <StyledButton>
          <Button>チャンネルを探す</Button>
        </StyledButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  background-color: ${(p) => p.theme.colors.base[500]};
`;

const StyledButton = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;

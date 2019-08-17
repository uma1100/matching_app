import * as React from "react";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import styled, {keyframes} from "styled-components";
import { profData } from "../infra/data";
import { getToken } from "../infra/firebase-messaging";

export default () => {
  const [token, setToken] = useState<string>(null);
  const [data] = useState(profData);
  const userAgent = window.navigator.userAgent.toLowerCase();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      setToken(token);
    })();
  }, []);

  return (
    <Wrapper>
      this is a token: {token}
      <CardList>
        {data.map(d => (
          <Card data={d}></Card>
        ))}
      </CardList>
      {token}
    </Wrapper>
  );
};

const animation = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const Wrapper = styled.div`
  padding: 12px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  > div:not(:first-child) {
    margin-top: 3.2rem;
  }
`;

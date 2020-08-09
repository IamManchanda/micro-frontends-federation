import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import BackPng from "./back.png";

const RemoteForm = lazy(() => import("RemoteForm/Form"));

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${BackPng});
`;

const WebpackTitle = styled.h4`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
`;

const Webpack = () => (
  <Page>
    <WebpackTitle>Form App</WebpackTitle>
    <Suspense fallback="Loading...">
      <RemoteForm />
    </Suspense>
  </Page>
);

export default Webpack;

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';
import StringViewer from 'containers/StringViewer';
import StringAdder from 'containers/StringAdder';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet defaultTitle="Dovenmuehle Tech Screen">
        <meta name="description" content="String display application" />
      </Helmet>

      <NavBar />

      <Switch>
        <Route path="/view" component={StringViewer} />
        <Route path="/input" component={StringAdder} />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}

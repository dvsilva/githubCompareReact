import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

import Main from "./pages/Main";

/**
const Title = styled.h1`
  color: '#F00';
  font-size: 32px;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>
);
 */

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;

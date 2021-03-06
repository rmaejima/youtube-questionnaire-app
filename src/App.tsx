import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { CategoryQuestion } from "pages/CategoryQuestion";
import { OrderQuestion } from "pages/OrderQuestion";
import { KeyQuestion1 } from "pages/KeyQuestion1";
import { KeyQuestion2 } from "pages/KeyQuestion2";
import { Result } from "pages/Result";
import { NotFound } from "pages/NotFound";
import { SearchProvider } from "contexts/SearchProvider";
import { ChannelProvider } from "contexts/ChannelProvider";
import { ChannelQuestion } from "pages/ChannelQuestion";
import { ChannelResult } from "pages/ChannelResult";

export const App: React.VFC = () => {
  return (
    <SearchProvider>
      <ChannelProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/q1" exact component={CategoryQuestion} />
            <Route path="/q2" exact component={OrderQuestion} />
            <Route path="/q3" exact component={KeyQuestion1} />
            <Route path="/q4" exact component={KeyQuestion2} />
            <Route path="/result" exact component={Result} />
            <Route path="/ch-q1" exact component={ChannelQuestion} />
            <Route path="/ch-result" exact component={ChannelResult} />
            <Route path="/notFound" exact component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
        </BrowserRouter>
      </ChannelProvider>
    </SearchProvider>
  );
};

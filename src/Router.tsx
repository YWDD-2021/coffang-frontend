import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Main from './page/Main';
import Detail from './page/Detail';

export type hasUserProps = {
  user: string | null;
};

const Router: React.FC<hasUserProps> = ({ user }: hasUserProps) => (
  <div>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail" exact render={() => <Detail user={user} />} />
      <Redirect path="*" to="/" />
    </Switch>
  </div>
);

export default Router;

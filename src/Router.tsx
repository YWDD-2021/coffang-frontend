import React from "react";
import { Switch, Redirect, Route, RouteComponentProps } from "react-router-dom";
import Main from "./page/Main";
import Detail from "./page/Detail";

export type hasUserProps = {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Router : React.FC<hasUserProps> = ({user,setUser}) => (
    <div>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/detail" exact componet={Detail}/>
            <Redirect path="*" to="/" />
        </Switch>
    </div>
);


export default Router;
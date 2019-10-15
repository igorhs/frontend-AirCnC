import React from 'react';

//Vamos criar as rotas da nossa aplicação com componentes
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

//Acessando as rotas Login, Dashboard, New
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>
    );
}
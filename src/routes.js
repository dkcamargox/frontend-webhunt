import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter> 
        <Switch> 
            <Route exact path='/' exact component={Main} />
            <Route path='/products/:id' exact component={Product} />
        </Switch>
    </BrowserRouter>
);
//BrowserRouter diz pra aplicação que utilizaremos um Browser
//o Switch faz o Routes escolher somente uma das rotas presentes
export default Routes;
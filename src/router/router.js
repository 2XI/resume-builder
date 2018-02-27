import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from 'components/Loading/Loading'

import Theme_1 from 'bundle-loader?lazy&name=Theme_1!pages/Theme_1/Theme_1'
import Theme_2 from 'bundle-loader?lazy&name=theme_2!pages/Theme_2/Theme_2'
import Theme_3 from 'bundle-loader?lazy&name=Theme_3!pages/Theme_3/Theme_3'
import Theme_4 from 'bundle-loader?lazy&name=theme_4!pages/Theme_4/Theme_4'
import Theme_5 from 'bundle-loader?lazy&name=Theme_5!pages/Theme_5/Theme_5'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound'

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
)

const getRouter = () => (
    <div>
        <Switch>
            <Route exact path="/theme_1" component={createComponent(Theme_1)}/>
            <Route exact path="/theme_2" component={createComponent(Theme_2)}/>
            <Route exact path="/theme_3" component={createComponent(Theme_3)}/>
            <Route exact path="/theme_4" component={createComponent(Theme_4)}/>
            <Route exact path="/theme_5" component={createComponent(Theme_5)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
)

export default getRouter
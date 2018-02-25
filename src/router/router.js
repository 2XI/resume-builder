import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from 'components/Loading/Loading'

import Theme_1 from 'bundle-loader?lazy&name=Theme_1!pages/Theme_1/Theme_1'
import Theme_2 from 'bundle-loader?lazy&name=theme_2!pages/Theme_2/Theme_2'
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
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
)

export default getRouter
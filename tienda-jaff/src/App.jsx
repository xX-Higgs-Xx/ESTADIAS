import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sales from './screens/sales';
import Index from './screens';

const App = () => {
    return (
        <Router>
            <Index />
            <Switch>
                <Route path="/sales" exact component={Sales} />
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TheSidebar from './app/components/TheSidebar/TheSidebar';
import { Repositories } from './features/repositories/Repositories';

function App() {
    return (
        <>
            <Router>
                <TheSidebar />
                <main id="page-wrap">
                    <Switch>
                        <Route path="/repos" component={Repositories} />
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default App;

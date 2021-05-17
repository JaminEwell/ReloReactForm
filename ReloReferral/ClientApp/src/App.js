import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchReloReferral } from './components/FetchReloReferral';
import { Landing } from './components/Landing';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fetchreloreferral' component={FetchReloReferral} />
                <Route path='/counter' component={Counter} />
                <Route path='/landing' component={Landing} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    }
}

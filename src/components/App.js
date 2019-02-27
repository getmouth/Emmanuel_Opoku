/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../../public/App.css';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import Header from './Header';
import Hero from './Hero';
import HeroImg from '../../img/heroImg.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Hero hero={HeroImg} />
        <BrowserRouter>
          <main className="container">
            <Switch>
              <Route exact path="/" component={RepoList} />
              <Route path="/:name" component={RepoDetails} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

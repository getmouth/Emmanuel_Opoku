/* eslint-disable no-undef */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../App.scss';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import HeroImg from '../../img/heroImg.jpg';


const App = () => (
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
    <Footer />
  </div>
);

export default App;

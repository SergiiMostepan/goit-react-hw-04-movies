import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoaderSpiner from './Loader/Loader';

import Header from './Header/Header';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

const Movie = lazy(() => import('./FilmsList/Movie'));

export default class App extends Component {
  state = {
    query: '',
    currentQury: '',
  };

  hendleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <Fragment>
        <Suspense fallback={<LoaderSpiner />}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:id" component={Movie} />
            <Route
              path="/movies"
              render={props => (
                <Movies
                  {...props}
                  query={query}
                  hendleChange={this.hendleChange}
                />
              )}
            />
            <Route component={Home} />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

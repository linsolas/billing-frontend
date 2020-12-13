import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './providers';
import ErrorBoundary from './components/ErrorBoundary';

import AppLayout from './components/AppLayout';

const Home = React.lazy(() => import('./pages/Home'));
const Factures = React.lazy(() => import('./pages/Facture/Read'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FunctionComponent<{}> = () => {
  return (
    <Providers>
      <AppLayout
        header={<></>}
        content={
            <ErrorBoundary>
              <Suspense
                fallback={<>Loading</>}
              >
                <Switch>
                  <Route exact={true} path="/" component={Home} />
                  <Route path="/factures" component={Factures} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
        }
        footer={<></>}
      />
    </Providers>
  );
};

export default App;

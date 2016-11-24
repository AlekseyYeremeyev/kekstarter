import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import appHistory from 'services/history';
import Application from 'components/application';
import Dashboard from 'components/dashboard';
import ProjectLayout from 'components/project';
import ProjectDetail from 'components/project/detail';

render((
  <Router history={ appHistory } >
    <Route component={ Application } >
      <Route path="/" component={ Dashboard } />
      <Route path="project" component={ ProjectLayout }>
        <Route path=":id" component={ ProjectDetail }/>
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('app'));

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './containers/employees/index';
import EditEmployee from './containers/employees/editEmployee';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Employees />
          </Route>
          <Route path='/employees/:employeeId'>
            <EditEmployee />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

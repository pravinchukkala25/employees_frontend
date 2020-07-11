import React, { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux';

import {
  getEmployees as getEmployeesAction,
  deleteEmployee as deleteEmployeeAction,
} from './actions';

function Employees(props) {

  const { getEmployeesLoading, getEmployeesSuccess, employees } = props;

  const deleteHandler = (event, id) => {
    if (id) {
      props.deleteEmployee(id);
    }

    event.preventDefault(true);
    event.stopPropagation(true);
  }

  useEffect(() => { 

    if (!getEmployeesLoading && !getEmployeesSuccess) {
      props.getEmployees();
    }

  },[getEmployeesLoading, getEmployeesSuccess]);

	return (
		<Container>
          <div className="my-3">
            <h1 className="text-center">Employees List</h1>
          </div>
          <div className="mb-3">
            <Link className="btn btn-info" to={`employee/`}>Add New</Link>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email-id</th>
                <th>Joining Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {props.employees && props.employees.length > 0 && props.employees.map(employee => (
                <tr>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.date_of_joining}</td>
                  <td>
                    <Link className="btn btn-info" to={`employee/${employee.id}`}>Edit</Link>{` `}
                    <Button variant="danger" onClick={(event) => deleteHandler(event, employee.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </Table>

        </Container>
		);

}


const mapStateToProps = state => {
  return {
    getEmployeesLoading: state.getEmployeesLoading,
    getEmployeesSuccess: state.getEmployeesSuccess,
    employees: state.employees,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => dispatch(getEmployeesAction()),
    deleteEmployee: id => dispatch(deleteEmployeeAction(id)),
  };
};


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Employees);
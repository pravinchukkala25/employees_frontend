import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

function Employees(props) {

	return (
		<Container>
          <div class="my-3">
            <h1 class="text-center">Employees List</h1>
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
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button variant="info">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>

        </Container>
		);

}

export default Employees;
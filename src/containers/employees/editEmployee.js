import React from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';



function EditEmployee(props) {
	let { employeeId } = useParams();
	return <h3>Requested topic ID: {employeeId}</h3>;

}

export default EditEmployee;
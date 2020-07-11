import React, { useEffect } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';

import { connect } from "react-redux";
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  viewEmployee as viewEmployeeAction,
  addEmployee as addEmployeeAction,
  updateEmployee as updateEmployeeAction,
} from './actions';


function EditEmployee(props) {

	let { employeeId } = useParams();
	let history = useHistory();

	const { viewEmployeeLoading, viewEmployeeSuccess, updateEmployeeSuccess, employee } = props;

	const updateEmployee = values => {
		if(employeeId && !updateEmployeeSuccess) {
			props.updateEmployee({
				id: employeeId,
				updateFields: {...values},
			});
		} else {
			props.addEmployee(values);
		}

		history.push('/');
	}

	useEffect(() => { 
		console.log(history);
    if(employeeId && !viewEmployeeLoading && !viewEmployeeSuccess) {
      props.viewEmployee(employeeId);
    }

  },[viewEmployeeLoading, viewEmployeeSuccess]);


	// Formik Validations Setup

	const formik = useFormik({
		enableReinitialize: true,
    initialValues: { ...employee },
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Must be 50 characters or less').required('Employee name is required.'),
      email: Yup.string().email('Invalid email address').required('Email-id is required.').typeError('Value is in incorrect format.'),
      date_of_joining: Yup.date().nullable(),
      current_ctc: Yup.number().required('Current CTC is required.').typeError('Value is in incorrect format.'),
      date_of_relieving: Yup.date().nullable(),
    }),
    onSubmit: values => {
			updateEmployee(values);
		}
   });

	
	return (
			<Container>
				<Card className="my-5">
					<Card body>
						<Card.Title className="mb-4">Employee Title</Card.Title>
						<Form onSubmit={formik.handleSubmit}>
							<Row>
						    <Col>
							    <Form.Group controlId="name">
								    <Form.Label>Name</Form.Label>
							      <Form.Control name="name" type="text" placeholder="Enter name." {...formik.getFieldProps('name')} />
							      <Form.Text className="text-danger">
								      {formik.touched.name && formik.errors.name ? formik.errors.name : null}
								    </Form.Text>
							    </Form.Group>
						    </Col>
						     <Col>
							    <Form.Group controlId="email">
								    <Form.Label >Email</Form.Label>
							      <Form.Control name="email" type="email" placeholder="Enter email." {...formik.getFieldProps('email')} />
							      <Form.Text className="text-danger">
								      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
								    </Form.Text>
								  </Form.Group>
						    </Col>
							</Row>
							<Row>
						    <Col>
						    	<Form.Group controlId="date_of_joining">
								    <Form.Label>Date of Joining</Form.Label>
							      <Form.Control 
							      	type="date" 
							      	name="date_of_joining" 
							      	placeholder="Enter date of joining." 
							      	{...formik.getFieldProps('date_of_joining')} 
							      />
							      <Form.Text className="text-danger">
								      {formik.touched.date_of_joining && formik.errors.date_of_joining ? formik.errors.date_of_joining : null}
								    </Form.Text>
								  </Form.Group>  
						    </Col>
						     <Col>
						      <Form.Group controlId="current_ctc">
								    <Form.Label>Current CTC</Form.Label>
							      <Form.Control 
								      type="text" 
								      name="current_ctc" 
								      placeholder="Enter current CTC." 
								      {...formik.getFieldProps('current_ctc')} 
							      />
							      <Form.Text className="text-danger">
								      {formik.touched.current_ctc && formik.errors.current_ctc ? formik.errors.current_ctc : null}
								    </Form.Text>
								  </Form.Group>    
						    </Col>
							</Row>

							<Row>
						    <Col md="6">
						    	<Form.Group controlId="date_of_relieving">
								    <Form.Label>Date of Relieving</Form.Label>
							      <Form.Control 
								      type="date" 
								      name="date_of_relieving" 
								      placeholder="Enter date of relieving." 
								      {...formik.getFieldProps('date_of_relieving')} 
							      />
							      <Form.Text className="text-danger">
								      {formik.touched.date_of_relieving && formik.errors.date_of_relieving ? formik.errors.date_of_relieving : null}
								    </Form.Text>
								  </Form.Group>
						    </Col>
							</Row>
				      
				      <Button variant="info" type="submit">Save</Button>
						</Form>
					</Card>
				</Card>
			</Container>
		);

}


const mapStateToProps = state => {
  return {
    viewEmployeeLoading: state.viewEmployeeLoading,
    viewEmployeeSuccess: state.viewEmployeeSuccess,
    employee: state.employee,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewEmployee: id => dispatch(viewEmployeeAction(id)),
    updateEmployee: ({id, updateFields}) => dispatch(updateEmployeeAction({id, updateFields})),
    addEmployee: values => dispatch(addEmployeeAction(values)),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);


export default compose(withConnect)(EditEmployee);
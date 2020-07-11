
import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	GET_EMPLOYEES_FAILURE,
	VIEW_EMPLOYEE,
	VIEW_EMPLOYEE_SUCCESS,
	VIEW_EMPLOYEE_FAILURE,
	ADD_EMPLOYEE,
	ADD_EMPLOYEE_SUCCESS,
	ADD_EMPLOYEE_FAILURE,
	UPDATE_EMPLOYEE,
	UPDATE_EMPLOYEE_SUCCESS,
	UPDATE_EMPLOYEE_FAILURE,
	DELETE_EMPLOYEE,
	DELETE_EMPLOYEE_SUCCESS,
	DELETE_EMPLOYEE_FAILURE,
} from './constants';


/**
	* GET EMPLOYEES ACTIONS
	*/

export function getEmployees(payload) {
	return {
		type: GET_EMPLOYEES,
		payload,
	};
}


export function getEmployeesSuccess(payload) {
	return {
		type: GET_EMPLOYEES_SUCCESS,
		payload,
	};
}

export function getEmployeesFailure(payload) {
	return {
		type: GET_EMPLOYEES_FAILURE,
		payload,
	};
}

/**
	* VIEW EMPLOYEE ACTIONS
	*/
export function viewEmployee(payload) {
	return {
		type: VIEW_EMPLOYEE,
		payload,
	};
}

export function viewEmployeeSuccess(payload) {
	return {
		type: VIEW_EMPLOYEE_SUCCESS,
		payload,
	};
}

export function viewEmployeeFailure(payload) {
	return {
		type: VIEW_EMPLOYEE_FAILURE,
		payload,
	};
}


/**
	* ADD EMPLOYEE ACTIONS
	*/

export function addEmployee(payload) {
	return {
		type: ADD_EMPLOYEE,
		payload,
	};
}

export function addEmployeeSuccess(payload) {
	return {
		type: ADD_EMPLOYEE_SUCCESS,
		payload,
	};
}

export function addEmployeeFailure(payload) {
	return {
		type: ADD_EMPLOYEE_FAILURE,
		payload,
	};
}


/**
	* UPDATE EMPLOYEE ACTIONS
	*/

export function updateEmployee(payload) {
	return {
		type: UPDATE_EMPLOYEE,
		payload,
	};
}

export function updateEmployeeSuccess(payload) {
	return {
		type: UPDATE_EMPLOYEE_SUCCESS,
		payload,
	};
}

export function updateEmployeeFailure(payload) {
	return {
		type: UPDATE_EMPLOYEE_FAILURE,
		payload,
	};
}


/**
	* DELETE EMPLOYEE ACTIONS
	*/

export function deleteEmployee(payload) {
	return {
		type: DELETE_EMPLOYEE,
		payload,
	};
}

export function deleteEmployeeSuccess(payload) {
	return {
		type: DELETE_EMPLOYEE_SUCCESS,
		payload,
	};
}

export function deleteEmployeeFailure(payload) {
	return {
		type: DELETE_EMPLOYEE_FAILURE,
		payload,
	};
}


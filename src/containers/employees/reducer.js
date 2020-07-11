import {
	GET_EMPLOYEES,
	GET_EMPLOYEES_SUCCESS,
	GET_EMPLOYEES_FAILURE,
	VIEW_EMPLOYEE,
	VIEW_EMPLOYEE_SUCCESS,
	VIEW_EMPLOYEE_FAILURE,
	ADD_EMPLOYEE_SUCCESS,
	ADD_EMPLOYEE_FAILURE,
	UPDATE_EMPLOYEE_SUCCESS,
	UPDATE_EMPLOYEE_FAILURE,
	DELETE_EMPLOYEE_SUCCESS,
	DELETE_EMPLOYEE_FAILURE,
	RESET_LOADING_STATE,
} from './constants';

const initialState = {
	employee: {
		id: '',
		name: '',
   	email: '',
   	date_of_joining: '',
   	current_ctc: '',
   	date_of_relieving: '',
	},
	employees: [],
	getEmployeesLoading: false,
	getEmployeesSuccess: false,
	getEmployeesFailure: false,
	viewEmployeeLoading: false,
	viewEmployeeSuccess: false,
	viewEmployeeFailure: false,
	addEmployeeFailure: false,
	addEmployeeSuccess: false,
	updateEmployeeFailure: false,
	updateEmployeeSuccess: false,
	deleteEmployeeSuccess: false,
	deleteEmployeeFailure: false,
};


const employeesReducer = (state = initialState, action) => {
	const draft = {...state};
		switch (action.type) {
			case GET_EMPLOYEES:
				draft.getEmployeesLoading = true;
				draft.getEmployeesFailure = false;
				draft.getEmployeesSuccess = false;
				break;
			case GET_EMPLOYEES_SUCCESS:
			  draft.employees = action.payload;
			  draft.getEmployeesLoading = false;
				draft.getEmployeesFailure = false;
				draft.getEmployeesSuccess = true;
				break;
			case GET_EMPLOYEES_FAILURE:
			  draft.getEmployeesLoading = false;
				draft.getEmployeesFailure = true;
				draft.getEmployeesSuccess = false;
				break;

			// VIEW EMPLOYEE
			case VIEW_EMPLOYEE:
				draft.viewEmployeeLoading = true;
				draft.viewEmployeeFailure = false;
				draft.viewEmployeeSuccess = false;
				break;
			case VIEW_EMPLOYEE_SUCCESS:
			  draft.employee = action.payload;
			  draft.viewEmployeeLoading = false;
				draft.viewEmployeeFailure = false;
				draft.viewEmployeeSuccess = true;
				break;
			case VIEW_EMPLOYEE_FAILURE:
			  draft.viewEmployeeLoading = false;
				draft.viewEmployeeFailure = true;
				draft.viewEmployeeSuccess = false;
				break;

			// ADD EMPLOYEE
			case ADD_EMPLOYEE_SUCCESS:
			  draft.employees = action.payload;
				draft.addEmployeeFailure = false;
				draft.addEmployeeSuccess = true;
				break;
			case ADD_EMPLOYEE_FAILURE:
				draft.addEmployeeFailure = true;
				draft.addEmployeeSuccess = false;
				break;

			// UPDATE EMPLOYEE
			case UPDATE_EMPLOYEE_SUCCESS:
			  draft.employees = action.payload;
				draft.updateEmployeeFailure = false;
				draft.updateEmployeeSuccess = true;
				break;
			case UPDATE_EMPLOYEE_FAILURE:
				draft.updateEmployeeFailure = true;
				draft.updateEmployeeSuccess = false;
				break;

			// DELETE EMPLOYEE
			case DELETE_EMPLOYEE_SUCCESS:
			  draft.employees = action.payload;
				draft.deleteEmployeeFailure = false;
				draft.deleteEmployeeSuccess = true;
				break;
			case DELETE_EMPLOYEE_FAILURE:
				draft.deleteEmployeeFailure = true;
				draft.deleteEmployeeSuccess = false;
				break;

			case RESET_LOADING_STATE:
				draft.employee = {
													id: '',
													name: '',
											   	email: '',
											   	date_of_joining: '',
											   	current_ctc: '',
											   	date_of_relieving: '',
												};
			  draft.viewEmployeeLoading = false;
				draft.viewEmployeeFailure = false;
				draft.viewEmployeeSuccess = false;
				break;

		}
	return draft;
};


export default employeesReducer;
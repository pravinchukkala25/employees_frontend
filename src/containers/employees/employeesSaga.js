import { all, put, takeLatest, call, select } from 'redux-saga/effects';

import {
	getEmployees as getEmployeesApi,
	view as viewApi,
	add as addApi,
	update as updateApi,
	deleteEmp as deleteApi,
} from './employeesApi';


import {
	GET_EMPLOYEES,
	VIEW_EMPLOYEE,
	UPDATE_EMPLOYEE,
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
} from './constants';

import {
	getEmployeesSuccess as getEmployeesSuccessAction,
	getEmployeesFailure as getEmployeesFailureAction,
	viewEmployeeSuccess as viewEmployeeSuccessAction,
	viewEmployeeFailure as viewEmployeeFailureAction,
	addEmployeeSuccess as addEmployeeSuccessAction,
	addEmployeeFailure as addEmployeeFailureAction,
	updateEmployeeSuccess as updateEmployeeSuccessAction,
	updateEmployeeFailure as updateEmployeeFailureAction,
	deleteEmployeeSuccess as deleteEmployeeSuccessAction,
	deleteEmployeeFailure as deleteEmployeeFailureAction,
} from './actions';


function* getEmployees() {
	try {
		const employees = yield call(getEmployeesApi);
		yield put(getEmployeesSuccessAction(employees));
	} catch (err) {
		yield put(getEmployeesFailureAction({ error: err }));
	}
}

function* viewEmployee(action) {
	try {
		const employee = yield call(viewApi, action.payload);
		yield put(viewEmployeeSuccessAction(employee));
	} catch (err) {
		yield put(viewEmployeeFailureAction({ error: err }));
	}
}

function* addEmployee(action) {
	try {
		yield call(addApi, action.payload);
		const employees = yield call(getEmployeesApi);
		yield put(addEmployeeSuccessAction(employees));
	} catch (err) {
		yield put(addEmployeeFailureAction({ error: err }));
	}
}

function* updateEmployee(action) {
	try {
		yield call(updateApi, {
			id: action.payload.id,
			updateFields: action.payload.updateFields,
		});
		const employees = yield call(getEmployeesApi);
		yield put(updateEmployeeSuccessAction(employees));
	} catch (err) {
		yield put(updateEmployeeFailureAction({ error: err }));
	}
}

function* deleteEmployee(action) {
	try {
		yield call(deleteApi, action.payload);
		const employees = yield call(getEmployeesApi);
		yield put(deleteEmployeeSuccessAction(employees));
	} catch (err) {
		console.log(err);
		debugger;
		yield put(deleteEmployeeFailureAction({ error: err }));
	}
}


export default function* employeesSaga() {
	yield all([
		takeLatest(GET_EMPLOYEES, getEmployees),
		takeLatest(VIEW_EMPLOYEE, viewEmployee),
		takeLatest(ADD_EMPLOYEE, addEmployee),
		takeLatest(UPDATE_EMPLOYEE, updateEmployee),
		takeLatest(DELETE_EMPLOYEE, deleteEmployee),
	]);
}

import React, { useState } from 'react'
import { createEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [hireDate, setHireDate] = useState('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        department: '',
        position: '',
        salary: '',
        hireDate: ''
    })

    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email, phoneNumber, department, position, salary, hireDate }
            console.log(employee)

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            })
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        if (phoneNumber.trim()) {
            errorsCopy.phoneNumber = '';
        } else {
            errorsCopy.phoneNumber = 'Phone number is required';
            valid = false;
        }

        if (department.trim()) {
            errorsCopy.department = '';
        } else {
            errorsCopy.department = 'Department is required';
            valid = false;
        }

        if (position.trim()) {
            errorsCopy.position = '';
        } else {
            errorsCopy.position = 'Position is required';
            valid = false;
        }

        if (salary.trim()) {
            errorsCopy.salary = '';
        } else {
            errorsCopy.salary = 'Salary is required';
            valid = false;
        }

        if (hireDate.trim()) {
            errorsCopy.hireDate = '';
        } else {
            errorsCopy.hireDate = 'Hire date is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                >
                                </input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone Number:</label>
                                <input
                                    type='number'
                                    placeholder='Enter Employee Phone Number'
                                    name='phoneNumber'
                                    value={phoneNumber}
                                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                >
                                </input>
                                {errors.phoneNumber && <div className='invalid-feedback'>{errors.phoneNumber}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Department:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Department'
                                    name='department'
                                    value={department}
                                    className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                </input>
                                {errors.department && <div className='invalid-feedback'>{errors.department}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Position:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Position'
                                    name='position'
                                    value={position}
                                    className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                </input>
                                {errors.position && <div className='invalid-feedback'>{errors.position}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Salary:</label>
                                <input
                                    type='number'
                                    placeholder='Enter Employee Salary'
                                    name='salary'
                                    value={salary}
                                    className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                                    onChange={(e) => setSalary(e.target.value)}
                                >
                                </input>
                                {errors.salary && <div className='invalid-feedback'>{errors.salary}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Hire Date:</label>
                                <input
                                    type='date'
                                    placeholder='Enter Employee Hire Date'
                                    name='hireDate'
                                    value={hireDate}
                                    className={`form-control ${errors.hireDate ? 'is-invalid' : ''}`}
                                    onChange={(e) => setHireDate(e.target.value)}
                                >
                                </input>
                                {errors.hireDate && <div className='invalid-feedback'>{errors.hireDate}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default EmployeeComponent
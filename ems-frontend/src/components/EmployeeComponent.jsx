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

    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email, phoneNumber, department, position, salary, hireDate }
        console.log(employee)


        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
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
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone Number:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Phone Number'
                                    name='phoneNumber'
                                    value={phoneNumber}
                                    className='form-control'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Department:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Department'
                                    name='department'
                                    value={department}
                                    className='form-control'
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Position:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Position'
                                    name='position'
                                    value={position}
                                    className='form-control'
                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Salary:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Salary'
                                    name='salary'
                                    value={salary}
                                    className='form-control'
                                    onChange={(e) => setSalary(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Hire Date:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Hire Date'
                                    name='hireDate'
                                    value={hireDate}
                                    className='form-control'
                                    onChange={(e) => setHireDate(e.target.value)}
                                >
                                </input>
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
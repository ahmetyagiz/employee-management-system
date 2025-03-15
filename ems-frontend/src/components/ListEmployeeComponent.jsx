/* eslint-disable no-unused-vars */
import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@mail.com"
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@mail.com"
        },
        {
            "id": 3,
            "firstName": "Adam",
            "lastName": "Smith",
            "email": "adam.smith@mail.com"
        }
    ]

    return (
        <div className='container'>
            <h2>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>)

                    }
                </tbody>
            </table>
        </div >
    )
}

export default ListEmployeeComponent
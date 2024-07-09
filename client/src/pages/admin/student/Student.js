import React from 'react'
import { NavLink } from 'react-router-dom';
import DeleteModal from '../layout/DeleteModal'

const Student = () => {
    return (
        <>
            <section id="content">
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Student</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                </li>
                                <li>
                                    <NavLink className="active" to="/dashboard/addstudent">
                                        Student
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <NavLink to="/dashboard/add-student" className="btn-download">
                            <i className="bx bx-plus"></i>
                            <span className="text">Add Student</span>
                        </NavLink>
                    </div>

                    <table class="rwd-table">
                        <tbody>
                            <tr>
                                <th style={{ width: "8%" }}>ID</th>
                                <th style={{ width: "35%" }}>Full Name</th>
                                <th style={{ width: "12%" }}>Contect No </th>
                                <th style={{ width: "20%" }}>UserName</th>
                                <th style={{ width: "15%" }}>Handle</th>
                            </tr>

                            <div className='not_found'>
                                {/* {payment.length === 0 && <p style={{ color: 'red' }}>item not found </p>} */}
                            </div>

                            <tr>
                                <td>1</td>
                                <td>dhuka muhammad mustakim </td>
                                <td>8799019880</td>
                                <td>muhammad </td>
                                <td className='clan_handle'>
                                    <NavLink to="/editepayment">
                                        <button style={{ backgroundColor: "#3C91E6" }}><i className='bx bxs-edit'></i></button>
                                    </NavLink>
                                    <DeleteModal />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </section>
        </>
    )
}

export default Student;

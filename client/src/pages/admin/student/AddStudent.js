import React from "react";
import { NavLink } from "react-router-dom";

const AddStudent = () => {
    return (
        <>
            <section id="content">
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Add Student</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                </li>
                                <li>
                                    <NavLink className="active" to="/dashboard/add-student">
                                        Add Student
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="add_member" style={{ marginTop: "15px" }}>
                        <div className="member_input">
                            <div className="addmember_input">
                                <label> First Name :</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                //   name="f_name"
                                //   value={addmember.f_name}
                                //   onChange={handleChangeAdd}
                                />
                            </div>

                            <div className="addmember_input">
                                <label>Middle Name :</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                //   name="m_name"
                                //   value={addmember.m_name}
                                //   onChange={handleChangeAdd}
                                />
                            </div>

                            <div className="addmember_input">
                                <label> Last Name :</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder=" Last Name"
                                //   name="l_name"
                                //   value={addmember.l_name}
                                //   onChange={handleChangeAdd}
                                />
                            </div>
                        </div>
                        {/* EROR SHOW  */}

                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="addclan_input" style={{ width: "48.5%" }}>
                                <label>Contact Number :</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Contact Number"
                                    name="m_number"
                                />
                            </div>
                            <div className="addclan_input" style={{ width: "48.5%" }}>
                                <label> Email :</label>
                                <br />
                                <input type="text" placeholder="Email " name="m_number" />
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className="addclan_input" style={{ width: "48.5%" }}>
                                <label>UserName :</label>
                                <br />
                                <input type="text" placeholder="UserName" name="UseUserNamer" />
                            </div>
                            <div className="addclan_input" style={{ width: "48.5%" }}>
                                <label> password :</label>
                                <br />
                                <input type="text" placeholder="password " name="password" />
                            </div>
                        </div>

                        <div className="addclan_input">
                            <label> Date of birth:</label>
                            <br />
                            <input
                                type="date"
                                placeholder="Date of birthe"
                                name="join_date"
                            />
                        </div>

                        <div className="add_clan_btn">
                            <button>Add Member</button>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default AddStudent;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "../../pages/admin/student/Student";
import AddStudent from "../../pages/admin/student/AddStudent";
import Hoc from "../../pages/admin/layout/Hoc";

const StudentRoute = () => {
    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/dashboard/student"
                    element={
                        <>
                            <Hoc />
                            <Student />
                        </>
                    }
                />
                <Route
                    exact
                    path="/dashboard/add-student"
                    element={
                        <>
                            <Hoc />
                            <AddStudent />
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default StudentRoute;

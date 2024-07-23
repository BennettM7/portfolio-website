import React from "react";
import Course from "../components/course";
import "../styles/courses.css"
import "../App.css"

export default function Courses() {
    return(
        <div>
            <div>
                <h1>Courses</h1>
                <p>Description for this page</p>
            </div>
            <div className="course-container">
                <Course name={"Test"} description={"Test"} />
                <Course name="Comp 110" />
            </div>
        </div>
    )
}
import React from "react";
import ProjectCard from "../components/project-card";
import csxl_project from "../photos/Sally Student My Org Page.png";
import lil_logo from "../photos/lil-logo.png";
import twitter_logo from "../photos/twitter-logo.png"
import "../styles/projects.css";

export default function Projects(){
    const csxl_short_desc = `
        Worked with a 4-person team to create an Angular webiste that displays the organizations 
        they are apart of and what their roles are in said organization. 
        Utitlized SQLAlchemy to retrieve information from the CSXL database and display on a Angular framework.
    `

    const mock_twitter_short_desc = `
        For a final project in my CSSG Education Team final project I was tasked with creating a mock Twitter webiste.
        Utilizing NextJS and Supabase I was able to create a minimal mock Twitter where people were able to interact with the website
        in a way that the popular platform X formally known as Twitter is used.
    `

    const basename = "/portfolio-website/projects"
    return(
        <div>
            <div className="title">
                <h1>Projects</h1>
                <p>
                    Welcome to the projects page. 
                    Below you will see cards that contain a title and a short description about the projects that 
                    I have worked on or am currently working on. 
                    You can click the "Read More" button to see more details on said projects.
                </p>
            </div>
            <div className="projects-container">
                <ProjectCard image={lil_logo} img_height="200" title="CSXL Organization Management" short_desc={csxl_short_desc} read_more_link={"/projects/csxl-organization-management"}/>
                <ProjectCard image={twitter_logo} img_height="200" title="Mock Twitter" short_desc={mock_twitter_short_desc} read_more_link={"/projects/mock-twitter"} />
            </div>
        </div>
    )
}
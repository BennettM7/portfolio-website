import React from "react";
import Image from "@mui/icons-material";
import Larry_Leader_Organization from "../photos/Larry Leader Organization Details.png"
import Larry_Leader_Edit_Member from "../photos/Larry Leader Edit Member Page.png"
import Sally_Student_My_Organization from "../photos/Sally Student My Org Page.png"
import Button  from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/project-article.css"

export default function CSXLProject() {
    const img_height = 487.5;
    const img_width = 960;
    return (
        <div>
            <div className="title">
                <h1>CSXL Organization Management</h1>
                <p>First major team project in my Foundation of Software Engineering Class. My team and I built a working Organization Management system for the UNC CSXL website page. Utilizing our full-stack skills we have developed from our Foundation of Software Engineering class.</p>
            </div>
            <div className="article-div">
                <img src={Larry_Leader_Organization} width={img_width} height={img_height} />
                <Typography variant="body1">
                    In my Foundation of Software Engineering class, I joined a team to design a new feature for the Computer Science Experience Labs (CSXL) website. 
                    Our group focused on creating a Student Organization Member Management feature, which enables UNC's Computer Science organizations to manage their club members through the CSXL website. 
                    We believed this feature would streamline the management process, providing a more efficient and user-friendly experience for everyone involved.
                </Typography>
                <Typography variant="body1">
                    This class taught us how to use stories and personas to guide software development. 
                    Our project centered around two main personas: Larry Leader and Sally Student. 
                    Below, I'll briefly describe their functionalities, with more details available in the private YouTube video link provided.
                </Typography>
                <Typography variant="h6" sx={{color: 'white'}}>
                    Larry Leader:
                    <br />
                    <Typography variant="body1">
                        Larry is a student leader, such as the president of the CSSG club. Once granted leadership permissions by a CSXL admin, Larry can access a dedicated view of his organization. 
                        Here, he can manage the organization, including changing its status to open, application-based, or closed. 
                        Larry can also add a link to the join button for application or other purposes, edit the join description with detailed instructions, and use widgets to manage members and pending requests. 
                        The pending request widget updates with a counter, notifying Larry of new requests.
                    </Typography>
                </Typography>
                <img src={Larry_Leader_Edit_Member} width={img_width} height={img_height} />
                <Typography variant="h6" sx={{color: 'white'}}>
                    Sally Student:
                    <br />
                    <Typography variant="body1">
                        Sally is a student looking to join an organization. 
                        Both Sally and Larry have a My Organization page, showing their memberships, titles, and join dates. 
                        When Sally views an organization's details, she sees the same page as Larry, but without editing capabilities. 
                        She can join, request to join, or leave an organization. When she requests to join, her status changes to pending, and she sees a greyed-out "pending" button. 
                        Once accepted, this button changes to a "leave" button, requiring confirmation to exit the organization.
                    </Typography>
                </Typography>
                <img src={Sally_Student_My_Organization} width={img_width} height={img_height} />
                <Typography variant="body1">
                    Working on this project was a fantastic experience. 
                    I gained valuable skills in group collaboration, professional Git usage, agile methodologies, and Angular for website feature design. 
                    One of the most challenging tasks was designing the many-to-many relationship table for students and organizations, allowing users to be members of multiple organizations. 
                    This project honed my skills in CSS, databases, and APIs. I'm grateful for this opportunity and excited to apply my skills to future projects.
                </Typography>
                <Button 
                    href={"https://youtu.be/bEkhTi3po0c"}
                    sx={{color: 'white', backgroundColor: '#E88D67', '&:hover': {backgroundColor: '#6DC5D1'}}}
                >
                    Youtube Demo
                </Button>
            </div>
        </div>
    );
}
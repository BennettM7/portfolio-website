import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia  from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "../styles/projects.css"

export default function ProjectCard({image, img_height, img_width, title, short_desc, read_more_link}) {
    return(
        <div>
            <Card 
                sx={{
                    width: 500,
                    height: 450,
                    backgroundColor: '#E88D67', // Change the background color
                    color: 'white', // Change the text color
                    boxShadow: '0px 5px 25px rgba(255, 255, 255, 0.6)',
                }}
            >
                    <CardHeader title={title} />
                    <CardMedia
                        component="img"  
                        height={img_height}
                        image={image}
                    />
                    <CardContent
                        sx={{
                            height: 100,
                        }}
                    >
                        <Typography variant="body2" color="white">{short_desc}</Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to={read_more_link} className={"project-nav-link"}>Read More</NavLink>
                    </CardActions>
            </Card>
        </div>
    );
};
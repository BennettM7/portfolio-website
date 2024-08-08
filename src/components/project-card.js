import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia  from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProjectCard({image, img_height, img_width, title, short_desc}) {
    return(
        <div>
            <Card 
                sx={{
                    maxWidth: 500,
                    backgroundColor: '#E88D67', // Change the background color
                    color: 'white', // Change the text color
                }}
            >
                    <CardHeader title={title} />
                    <CardMedia
                        component="img"  
                        height={img_height}
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="white">{short_desc}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ color:"white" }} size="Small">Read More</Button>
                    </CardActions>
            </Card>
        </div>
    );
};
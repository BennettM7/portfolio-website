import * as React from "react";
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Fade from "@mui/material/Fade"
import "../styles/courses.css"


export default function Course({ name, description }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded(( prevExpanded ) => !prevExpanded);
    };

    return(
        <div className="course-accordion">
            <Accordion
                expanded={expanded}
                onChange={ handleExpansion }
                sx={{
                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                    backgroundColor: expanded ? '#6DC5D1' : '#E88D67',
                    transition: 'background-color 0.4s ease-in-out',
                    boxShadow: '0px 5px 20px rgba(255, 255, 255, 0.6)',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-controls"
                    id="panel1-Header"
                >
                    <Typography variant='subtitle1' color="#F3F7EC">
                        { name }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Fade in={expanded} timeout={650}>
                        <Typography color="#F3F7EC">{ description }</Typography>
                    </Fade>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
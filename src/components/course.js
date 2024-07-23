import * as React from "react";
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Fade from "@mui/material/Fade"


export default function Course({ name, description }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded(( prevExpanded) => !prevExpanded);
    };

    return(
        <div>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{transition: Fade}}
                slotProps={{ trasition: { timeout: 400 }}}
                sx={{
                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-controls"
                    id="panel1-Header"
                >
                    <Typography>{ name }</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{ description }</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
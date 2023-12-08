import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion = ({ summary, details }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography fontWeight={"600"} variant="h6">
                    {summary}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography textAlign={"left"} variant={"body1"}>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default FAQAccordion;

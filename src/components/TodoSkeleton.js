import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Skeleton from "@mui/material/Skeleton";

export const TodoSkeleton = () => {
  return (
    <Accordion expanded={false}>
      <AccordionSummary
        expandIcon={<Skeleton variant="circular" width={16} height={16} />}
      >
        <Skeleton variant="text" width={300} />
      </AccordionSummary>
    </Accordion>
  );
};

import {Link} from "react-router-dom";
import React from 'react';
import {LinkStep, List, ListItem} from "./styles";

export default function NavBox({steps, currentStep}) {
  return (
    <List>
      {steps && steps.map(i => (
        <ListItem key={i.step}>
          <LinkStep
            as={Link}
            to={i.route}
            disabled={currentStep < i.step}
            active={currentStep === i.step}
            completed={currentStep > i.step}
          >
            <span className="step">{i.step}</span>
            <span className="title">{i.name}</span>
          </LinkStep>
        </ListItem>
      ))}
    </List>
  )
}
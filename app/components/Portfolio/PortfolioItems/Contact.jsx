// imports react component classes
import React from 'react';

import InfoCard from './cards/InfoCard';

const resumeLink = 'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g';
const linkedinLink = 'https://www.linkedin.com/in/john-silkey-jr';
const githubLink = 'https://github.com/jpsilkjr86';

const Contact = props => (
  <InfoCard header="Contact Me">
  	<p>
  		Email: <a href="mailto:jpsilkjr86@gmail.com">jpsilkjr86@gmail.com</a>
  		<br/>
  		Phone: (see <a href={resumeLink} target="_blank">Resume</a>)
  		<br/>
  		LinkedIn: <a href={linkedinLink} target="_blank">{linkedinLink}</a>
  		<br/>
  		GitHub: <a href={githubLink} target="_blank">{githubLink}</a>
  		<br/>
  	</p>
  </InfoCard>
);

export default Contact;
/*
  		Also see:
  		<Row>
  			<Col xs={4}><Resume/></Col>
  			<Col xs={4}><GitHub/></Col>
  			<Col xs={4}><LinkedIn/></Col>
  		</Row>
  			*/
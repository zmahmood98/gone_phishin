import React from 'react';
import './index.css';

import {Accordion} from '../../components/index.js'

function Info () {
    return (
      <>
        <div className='info-div'>
          <section className='govuk-width-container'>
            <h1 className="govuk-heading-l">More Information to Avoid Phishing Scams</h1>
            <Accordion />
          </section>
        </div>
      </>
    );
  }
  
  export default Info;

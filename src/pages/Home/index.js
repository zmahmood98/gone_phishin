import React, { useState, useEffect, useRef, Component } from 'react';
import axios from "axios";
import './index.css';
import { Input } from '../../components'

function Home () {

    const api = axios.create({
        baseURL: "http://localhost:8080/score"
    });

    return (
        <>
                <section className='govuk-width-container'>
                    <div className='home-div'>
                        <h1 className="govuk-heading-l">URL Scan</h1>

                        <p className="govuk-body-l">The following service will scan any URL inputted and produce a percentage score to inform you of how likely it is that the link is part of a phishing scam. </p>
                    </div>

                    <Input />
                </section>

                <section className='govuk-width-container'>
                    <h2 className="govuk-heading-m h2">Results</h2>
                    <dl class="govuk-summary-list">
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                            URL
                            </dt>
                            <dd class="govuk-summary-list__value">
                            [dynamic content]
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                            Percentage Score
                            </dt>
                            <dd class="govuk-summary-list__value">
                            [dc]%
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                            Details
                            </dt>
                            <dd class="govuk-summary-list__value">
                            <p class="govuk-body">It is [dc] that this link is part of a phishing scam.</p>
                            </dd>
                        </div>
                        </dl>
                </section>


        </>
    );
}
  
  export default Home;

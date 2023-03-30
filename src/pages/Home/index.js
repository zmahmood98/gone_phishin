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
        </>
    );
}
  
  export default Home;

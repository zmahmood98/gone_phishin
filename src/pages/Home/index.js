import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Banner } from "../../components";

function Home() {
  const [show, setShow] = useState(false);
  const changeVisibility = () => {
    // if (score==null) {
    // setShow(!show);
    // }
    if (url != null && url.length >= 1) {
      setShow(!show);
    }
  };

  useEffect(() => {
    if (score == null) {
      setDetails("Loading...");
      setScore("Calculating Percentage...");
    } else if (score >= 75) {
      setDetails(
        "It is extremely likely that this link is part of a phishing scam."
      );
      setColor({ color: "red" });
    } else {
      setDetails(
        "It is not very likely that this link is part of a phishing scam."
      );
      setColor({ color: "green" });
    }

    if (url === "") {
      setDetails("");
      setScore(0);
    }

    console.log = console.warn = console.error = () => {};
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle validations
    await axios
      .post("https://flask-service-cors.enes6h8hrh0rm.eu-west-2.cs.amazonlightsail.com/score", { url: url })
      .then((response) => {
        console.log(response);
        setScore((response.data * 100).toFixed(2));
      });
  };

  const [url, setUrl] = useState();
  const [score, setScore] = useState();
  const [details, setDetails] = useState();
  const [color, setColor] = useState({ color: "black" });

  useEffect(() => {
    if (url == "") {
      setShow(false);
    }
  }, [url]);

  return (
    <>
      {/* <Banner /> */}
      <section className="govuk-width-container">
        <div className="home-div">
          <h1 className="govuk-heading-l">URL Scan</h1>

          <p className="govuk-body-l">
            This service is designed to provide an efficient and reliable way to
            detect phishing scams and protect users from potential harm. By
            analysing various factors such as the domain name and URL structure,
            the service can determine the likelihood that the link is part of a
            phishing scam. The resulting percentage score is a valuable tool
            that will enable you to make an informed decision about whether to
            click on a link or not.{" "}
          </p>
        </div>

        <form className="input-div" method="post" onSubmit={handleSubmit}>
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
              <h1 className="govuk-fieldset__heading gov-heading_custom">
                What is your URL?
              </h1>
            </legend>
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="address-line-1">
                URL
              </label>
              <input
                className="govuk-input"
                id="address-line-1"
                name="address-line-1"
                type="text"
                autoComplete="address-line1"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </fieldset>
          <button
            className="govuk-button button"
            data-module="govuk-button"
            type="submit"
            onClick={changeVisibility}
          >
            Scan
          </button>
        </form>
      </section>
      {show && (
        <section className="govuk-width-container results">
          <h2 className="govuk-heading-m h2">Results</h2>
          <dl className="govuk-summary-list">
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">URL</dt>
              <dd className="govuk-summary-list__value">{url}</dd>
            </div>
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Percentage Score</dt>
              <dd className="govuk-summary-list__value" style={color}>
                {score}%
              </dd>
            </div>
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Details</dt>
              <dd className="govuk-summary-list__value">
                <p className="govuk-body">{details}</p>
              </dd>
            </div>
          </dl>
        </section>
      )}
    </>
  );
}

export default Home;

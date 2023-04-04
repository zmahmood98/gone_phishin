import React from "react";
import "./index.css";

const Banner = () => {
  return (
    <>
      <section className="govuk-width-container container">
        <div
          className="govuk-notification-banner"
          role="region"
          aria-labelledby="govuk-notification-banner-title"
          data-module="govuk-notification-banner"
        >
          <div className="govuk-notification-banner__header">
            <h2
              className="govuk-notification-banner__title"
              id="govuk-notification-banner-title"
            >
              Important
            </h2>
          </div>
          <div className="govuk-notification-banner__content">
            <p className="govuk-notification-banner__heading">
              This website's server is currently not deployed, so results will
              not display correctly at this time. If you would like to run the
              server locally please click &nbsp;
              <a
                className="govuk-notification-banner__link"
                href="https://github.com/parminder-thindal-moj/gone-phishin-xgov-hackathon"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

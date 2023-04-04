import React from "react";
import "./index.css";

import footerCrown from "../../assets/images/govuk-crest-2x.png";

const Footer = () => {
  return (
    <>
      <footer className="govuk-footer app-footer" role="contentinfo">
        <div className="govuk-width-container app-width-container">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul className="govuk-footer__inline-list">
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="/accessibility/">
                    Accessibility
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="/sitemap/">
                    Sitemap
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="/cookies/">
                    Cookies
                  </a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="/privacy-policy/">
                    Privacy
                  </a>
                </li>
              </ul>
              <div className="govuk-footer__meta-custom">
                Built by the{" "}
                <a href="/" className="govuk-footer__link">
                  Gone Phishin team
                </a>
              </div>

              <span className="govuk-footer__licence-description">
                <p>
                  All content is available under the &#160;
                  <a
                    className="govuk-footer__link"
                    href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                    rel="license"
                  >
                    Open Government Licence v3.0
                  </a>
                  , except where otherwise stated
                </p>
              </span>
            </div>
            <div className="govuk-footer__meta-item">
              <img
                src={footerCrown}
                width="125px"
                alt="UK Government Crest"
              ></img>
              <a
                className="govuk-footer__link "
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >
                © Crown copyright
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

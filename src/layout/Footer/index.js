import React from 'react';
import './index.css';

import footerCrown from "../../assets/images/govuk-crest-2x.png";

const Footer = () => {
    return (
    <>
        <footer class="govuk-footer app-footer" role="contentinfo">
            <div class="govuk-width-container app-width-container">
                <div class="govuk-footer__meta">
                <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
                    <h2 class="govuk-visually-hidden">Support links</h2>
                        <ul class="govuk-footer__inline-list">
                            <li class="govuk-footer__inline-list-item">
                            <a class="govuk-footer__link" href="/accessibility/">
                                Accessibility
                            </a>
                            </li>
                            <li class="govuk-footer__inline-list-item">
                            <a class="govuk-footer__link" href="/sitemap/">
                                Sitemap
                            </a>
                            </li>
                            <li class="govuk-footer__inline-list-item">
                            <a class="govuk-footer__link" href="/cookies/">
                                Cookies
                            </a>
                            </li>
                            <li class="govuk-footer__inline-list-item">
                            <a class="govuk-footer__link" href="/privacy-policy/">
                                Privacy
                            </a>
                            </li>
                        </ul>
                        <div class="govuk-footer__meta-custom">
                        Built by the <a href="" class="govuk-footer__link">Gone Phishin team</a>
                        </div>

                    
                    <span class="govuk-footer__licence-description">
                        <p>All content is available under the &#160;
                        <a class="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
                    </span>
                </div>
                <div class="govuk-footer__meta-item">
                    <img  src={footerCrown} width="125px"></img>
                    <a class="govuk-footer__link " href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© Crown copyright</a>
                </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;

import { useEffect, useRef } from "react";
import { Accordion as GovUK_Accordion } from "govuk-frontend";

const Accordion = () => {
  const ref = useRef(null);

  useEffect(() => {
    new GovUK_Accordion(ref.current).init();
  }, []);

  return (
    <div>
      <div
        className="govuk-accordion"
        data-module="govuk-accordion"
        id="accordion-default"
        ref={ref}
      >
        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-1"
              >
                Keep Informed About Phishing Techniques
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-1"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-1"
          >
            <p className="govuk-body">
              New phishing scams are being developed all the time. Without
              staying on top of these new phishing techniques, you could
              inadvertently fall prey to one. Keep your eyes peeled for news
              about new phishing scams.
            </p>
          </div>
        </div>
        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-2"
              >
                Think Before You Click
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-2"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-2"
          >
            <p className="govuk-body">
              It’s fine to click on links when you’re on trusted sites. Clicking
              on links that appear in random emails and instant messages,
              however, isn’t such a smart move. Hover over links that you are
              unsure of before clicking on them. Do they lead where they are
              supposed to lead? A phishing email may claim to be from a
              legitimate company and when you click the link to the website, it
              may look exactly like the real website. The email may ask you to
              fill in the information but the email may not contain your name.
              Most phishing emails will start with “Dear Customer” so you should
              be alert when you come across these emails. When in doubt, go
              directly to the source rather than clicking a potentially
              dangerous link.
            </p>
          </div>
        </div>
        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-3"
              >
                Verify a Site’s Security
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-3"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-3"
          >
            <p className="govuk-body">
              It's natural to be a little wary about supplying sensitive
              financial information online. As long as you are on a secure
              website, however, you shouldn't run into any trouble. Before
              submitting any information, make sure the site's URL begins with
              “https” and there should be a closed lock icon near the address
              bar. Check for the site's security certificate as well. If you get
              a message stating a certain website may contain malicious files,
              do not open the website. Never download files from suspicious
              emails or websites. Even search engines may show certain links
              which may lead users to a phishing webpage which offers low cost
              products. If the user makes purchases at such a website, the
              credit card details will be accessed by cybercriminals.
            </p>
          </div>
        </div>
        <div className="govuk-accordion__section ">
          <div className="govuk-accordion__section-header">
            <h2 className="govuk-accordion__section-heading">
              <span
                className="govuk-accordion__section-button"
                id="accordion-default-heading-4"
              >
                Keep Your Browser Up to Date
              </span>
            </h2>
          </div>
          <div
            id="accordion-default-content-4"
            className="govuk-accordion__section-content"
            aria-labelledby="accordion-default-heading-4"
          >
            <p className="govuk-body">
              Security patches are released for popular browsers all the time.
              They are released in response to the security loopholes that
              phishers and other hackers inevitably discover and exploit. If you
              typically ignore messages about updating your browsers, stop. The
              minute an update is available, download and install it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

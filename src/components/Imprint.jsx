import React from "react";

const Imprint = () => {
  return (
    <div className="imprint-page">
      <div className="imprint-content">
        <h1>Imprint</h1>
        <div className="imprint-info">
          <h3>Information according to § 5 TMG:</h3>
          <p>
            Ben Nurtjipta
            <br />
            Langbehnstr. 19a
            <br />
            22761 Hamburg
            <br />
            Germany
            <br />
            Profession: Web Developer
          </p>

          <h3>Contact:</h3>
          <p>
            Email:{" "}
            <a href="mailto:b.nurtjipta@gmail.com">b.nurtjipta@gmail.com</a>
          </p>

          <h3>Responsible according to § 55 Abs. 2 RStV:</h3>
          <p>
            Ben Nurtjipta
            <br />
            Langbehnstr. 19a
            <br />
            22761 Hamburg
            <br />
            Germany
          </p>

          <h3>EU Dispute Resolution:</h3>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            We are not willing or obliged to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>

          <h3>Disclaimer:</h3>
          <p>
            This website is a personal portfolio created for professional
            self-presentation purposes. The contents of this site have been
            created with the utmost care. However, I cannot guarantee the
            accuracy, completeness, or current relevance of the information.
            Liability for damages resulting from the use of the website is
            excluded unless caused intentionally or by gross negligence.
          </p>

          <h3>External Links:</h3>
          <p>
            This website contains links to external websites. I have no
            influence over the content of these external sites and therefore
            cannot assume any liability for them. The operators of the linked
            pages are solely responsible for their content.
          </p>

          <h3>Copyright:</h3>
          <p>
            The content and layout of this website are protected by copyright.
            Any reproduction, editing, distribution, or use outside the limits
            of copyright law requires the prior written consent of the author.
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="nav-button back-button"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Imprint;

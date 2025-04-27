export default function SuperVisaInsurance() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/super-visa-insurance-header.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Super Visa Insurance</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6 justify-content-center d-flex">
          <img
            src="../images/super-visa-insurance.jpg" // Replace with the actual path to your logo
            alt="New Life Financial Services Logo"
            width="600"
            height="600"
            className="d-inline-block align-top me-2 bg-light rounded-5"
          />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Super Visa</strong> is a type of visa that allows parents
            and grandparents of Canadian citizens or permanent residents to
            visit Canada for an extended period of up to 2 years at a time,
            without needing to renew their status. However, one of the key
            requirements to qualify for a Super Visa is that applicants must
            have valid medical insurance coverage from a Canadian insurance
            provider for the duration of their stay.
          </p>
          <p>
            The <strong>Super Visa insurance</strong> is tailored to provide
            coverage for unforeseen medical issues that might arise while
            visiting, including:
            <ol>
              <li>
                Emergency medical expenses: This includes hospitalization,
                surgery, doctor visits, and other emergency treatments.
              </li>
              <li>
                Prescription drugs: Coverage for medications prescribed by a
                doctor due to illness or injury.
              </li>
              <li>
                Repatriation: In the event of death, repatriation covers the
                cost of returning the body to the country of origin.
              </li>
              <li>
                Ambulance services: Emergency transportation if necessary.
              </li>
              <li>
                Medical evacuation: If the visitor needs to be transported to a
                medical facility in another location.
              </li>
            </ol>
          </p>
          <p>
            Additionally, the insurance must meet the following conditions:
            <ul>
              <li>It must be valid for a minimum of one year</li>
              <li>
                It must cover at least $100,000 CAD in health care,
                hospitalization, and repatriation.
              </li>
              <li>
                The insurance provider must be approved by the Canadian
                government.
              </li>
            </ul>
          </p>
          <p>
            It's really important for parents and grandparents applying for a
            Super Visa to make sure their medical insurance coverage is
            comprehensive, as the cost of healthcare in Canada can be very high,
            especially for non-residents.
          </p>
        </div>
      </div>
    </div>
  );
}

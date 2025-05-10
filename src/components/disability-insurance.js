export default function DisabilityInsurance() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/disability_insurance_header.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Disability Insurance</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <h4>Protection When You Need It Most</h4>
          <p className="text-muted bg-light p-4 rounded-3">
            Accidents can happen anywhere—at home, on the road, or at work.
            Whether it’s a temporary or long-term disability, these events can
            drastically affect your life. Medical expenses and special care can
            be expensive, and without the right protection, you may face
            financial hardship.
          </p>
          <h4>How Disability Insurance Helps</h4>
          <p>
            Disability insurance ensures that you have financial security if an
            illness or accident prevents you from working. It typically replaces
            up to two-thirds of your income, offering monthly payments that are
            tax-free when the plan is set up correctly. These benefits can help
            you maintain your lifestyle and cover ongoing medical expenses while
            you're unable to work.
          </p>
          <h4>Flexible Coverage: Beyond Recovery</h4>
          <p>
            Even after you recover, disability insurance can continue to offer
            protection if you experience a recurrence of the same condition or a
            new disability. Plus, some policies reward healthy policyholders
            with a refund of up to 70% of premiums if no claims are made.
          </p>
        </div>
        <div className="col-md-6 justify-content-center align-items-right d-flex">
          <img
            src="../images/disability_Insurance.jpg" // Replace with the actual path to your logo
            alt="New Life Financial Services Logo"
            width="600"
            height="600"
            className="d-inline-block align-top bg-light rounded-5"
          />
        </div>
      </div>
    </div>
  );
}

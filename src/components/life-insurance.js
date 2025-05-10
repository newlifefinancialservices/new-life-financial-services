export default function LifeInsurance() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/insurance.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Life Insurance</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <h2 className="header">Insurance products</h2>
          <p className="text-muted bg-light p-4 rounded-3">
            Your New Life financial services advisor will help you make sense of
            insurance, while creating a customized plan for you and your loved
            ones.
          </p>
          <h4>Term Insurance</h4>
          <p>
            Flexible life insurance for your evolving needs. No matter where
            life takes you, New Life Financial services is here to create a
            personalized solution that grows and adapts with you." Find the
            right coverage for your life stage Pick the term that fits your
            needs—10, 20, or 30 years—or combine them for added flexibility. You
            can also customize your plan with a variety of optional benefits
            when you buy. Not sure which option is best for you? Connect with a
            New Life Financial services advisor for guidance.
          </p>
          <h4>Whole Life Insurance</h4>
          <p>
            The future may be uncertain, but your coverage doesn’t have to be.
            With a participating Whole Life insurance policy, your premiums are
            fixed, and your family is guaranteed a payout when you are not there
            to support your family. This reliable protection also grows with
            you, adapting to your changing needs over time.
          </p>
        </div>
        <div className="col-md-6 justify-content-center align-items-right d-flex">
          <img
            src="../images/life-insurance.jpg" // Replace with the actual path to your logo
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

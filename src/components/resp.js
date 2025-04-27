export default function RESP() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/resp-header.jpg"
        alt="RESP Header"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Registered Education Savings Plan</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <p className="text-muted bg-light p-4 rounded-3">
            A Registered Education Savings Plan (RESP) is a tax-deferred savings
            account designed for Canadians to save for qualified post-secondary
            education expenses for eligible students.
          </p>
          <h2 className="header">
            What is an RESP (Registered Education Savings Plan)?
          </h2>
          <p>
            While most Canadians have likely heard of Registered Education
            Savings Plans (RESPs), many are still not clear how they work and
            could be missing out on key opportunities.
          </p>
          <p>
            An RESP is a tax-deferred savings account to help parents,
            grandparents and others save for a child’s post-secondary education.
            Subscribers, typically parents but can be anyone, open the RESP and
            make contributions for the plan’s beneficiaries.
          </p>
          <p>
            While your child is under 18, your contributions are generally
            eligible for a matching federal government contribution, called the
            Canada Education Savings Grant (CESG). This grant matches 20% (and
            in some cases more), of your contribution, up to an annual maximum
            of $500 and lifetime maximum of $7,200 per child. Additionally, the
            Canada Learning Bond (CLB) may be available for children in
            lower-income families.
          </p>
          <p>
            There is no annual limit on the RESP contributions you can make, but
            your annual contribution required to maximize the CESG is $2,500.
            RESPs do have a lifetime contribution limit of $50,000 per child.
            CESG and CLB payments aren’t included in this maximum.
          </p>
          <p>
            Contribution room accrues from your child's birth and unused amounts
            can be carried forward to future years. You can make contributions
            for up to 31 years from the opening of the RESP. Unlike RRSPs, your
            RESP contributions aren’t tax-deductible but they do grow
            tax-deferred. The CESGs and CLBs within the plan are tax-deferred as
            well. Most typical investments are available for RESPs, including
            mutual funds, GICs, ETFs, stocks and bonds.
          </p>
          <p>
            When the funds are eventually withdrawn by the beneficiaries for
            post-secondary education, the withdrawal is virtually tax-free.
            That’s because your contributions weren’t tax-deductible, while the
            investment returns and government amounts, will be included in the
            children's income for the year. And as students, they will be in a
            lower tax bracket or pay no tax at all.
          </p>
        </div>

        <div className="col-md-6 justify-content-center align-items-right d-flex">
          <img
            src="../images/resp.jpg" // Replace with the actual path to your logo
            alt="New Life Financial Services Logo"
            width="600"
            height="600"
            className="d-inline-block align-top bg-light rounded-5"
          />
        </div>
        <div>
          <h2 className="header">How do RESPs work?</h2>
          <h4>Eligibility requirements</h4>
          <p>
            Typically, it’s parents or grandparents setting up an RESP to save
            for the future post-secondary education of their children or
            grandchildren. They are known as the plan’s subscribers. However,
            anyone can open an RRSP account, and anyone can be a beneficiary. It
            may be a brother, sister or spouse.
          </p>
          <p>
            The subscriber owns the funds and makes the contributions. They are
            required to be a Canadian resident. A maximum of two subscribers per
            RESP are allowed, providing they are spouses. Grandparents can also
            be joint subscribers if they are spouses. The beneficiaries, usually
            the children or grandchildren who will draw on the funds to finance
            their education, must also be Canadian residents and have a valid
            Social Insurance Number (SIN).
          </p>
          <p>
            If the RESP is a family plan, there can be multiple beneficiaries,
            but they are required to be related to the subscriber. This would
            include children, stepchildren, grandchildren or siblings. Nieces
            and nephews are not eligible. Beneficiaries must also be under age
            21 when the plan is opened. If the RESP is an individual plan the
            subscriber and beneficiary can be anyone of any age, but there can
            only be one beneficiary.
          </p>
          <p>
            CESGs and CLBs have additional eligibility requirements. CESGs are
            only available up until the end of the calendar year when the child
            turns 17. The CLB is specifically offered to low-income families for
            children born after January 1, 2004.
          </p>
          <h4>Eligible educational institutions</h4>
          <p>
            The list of post-secondary schools you can save for through an RESP
            is extensive. It includes universities, community colleges,
            vocational colleges and technical colleges across Canada, plus many
            universities internationally.
          </p>
          <p>
            Other educational institutions that provide approved post-secondary
            courses and degrees may also qualify. Programs must be a minimum of
            13 weeks long and 10 hours per week of classes.
          </p>
          <p>
            Even if your child isn’t interested in college or university, there
            are many other RESP qualifying schools and programs. These include
            trade schools, hair stylist programs and CEGEPs in Quebec. The
            Government of Canada website has a complete list of designated
            educational institutions.
          </p>
        </div>
      </div>
    </div>
  );
}

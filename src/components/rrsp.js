export default function RESP() {
  return (
    <div className="text-start container mt-3">
      
      <img
        src="../images/rrsp-header.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Registered Retirement Savings Plan</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <p className="text-muted bg-light p-4 rounded-3">
            A registered retirement savings plan (RRSP) is an excellent tool for
            retirement planning. It’s a tax-advantaged account that grows,
            tax-free, until you retire. If you take into consideration the
            maximum contribution account and your specific tax bracket, an RRSP
            could be the perfect account for you, allowing you to avoid paying
            taxes on a significant portion of your income.
          </p>
          <h2 className="header">
            What is an RRSP (Registered Retirement Savings Plan)?
          </h2>
          <p>
            An RRSP is a tax-advantaged savings account designed to help
            Canadians save for retirement. It was introduced by the Canadian
            government in 1957 to encourage individuals to plan for their
            financial future. Contributions to an RRSP are tax-deductible, and
            the investments within the account grow tax-free until withdrawal.
          </p>
          <h2 className="header">Benefits of an RRSP</h2>
          <p>
            <ul>
              <li>
                <strong>Retirement Security:</strong> By contributing regularly,
                you can build a substantial nest egg for retirement.
              </li>
              <li>
                <strong>Tax Efficiency: </strong>The tax-deferred growth and
                tax-deductible contributions make RRSPs an effective tool for
                long-term savings.
              </li>
              <li>
                <strong>Flexibility: </strong>RRSPs offer a variety of
                investment options and withdrawal programs tailored to
                individual needs.
              </li>
            </ul>
          </p>
        </div>

        <div className="col-md-6 justify-content-center align-items-right d-flex">
          <img
            src="../images/rrsp.jpg" // Replace with the actual path to your logo
            alt="New Life Financial Services Logo"
            width="600"
            height="600"
            className="d-inline-block align-top bg-light rounded-5"
          />
        </div>
        <div>
          <h2 className="header">Key Features of an RRSP</h2>
          <ol>
            <li>
              <h4>Tax Benefits</h4>
              <ul>
                <li>
                  Contributions to an RRSP reduce your taxable income for the
                  year, potentially lowering the amount of tax you owe.
                </li>
                <li>
                  Investment income, such as interest, dividends, and capital
                  gains, grows tax-free within the account until funds are
                  withdrawn.
                </li>
              </ul>
            </li>
            <li>
              <h4>Contribution Limits</h4>
              <ul>
                <li>
                  You can contribute up to 18% of your earned income from the
                  previous year, subject to an annual maximum limit set by the
                  Canada Revenue Agency (CRA). For example, the limit for 2025
                  is $32,490.
                </li>
                <li>
                  Unused contribution room can be carried forward to future
                  years, allowing you to catch up on contributions.
                </li>
              </ul>
            </li>
            <li>
              <h4>Withdrawals</h4>
              <ul>
                <li>
                  Withdrawals are taxed as income in the year they are made.
                  However, since most people withdraw funds during retirement,
                  they are often in a lower tax bracket, reducing the overall
                  tax burden.
                </li>
                <li>
                  Special programs like the **Home Buyers' Plan (HBP) and
                  Lifelong Learning Plan (LLP) allow for tax-free withdrawals
                  under specific conditions, such as purchasing a first home or
                  funding education.
                </li>
              </ul>
            </li>
            <li>
              <h4>Investment Options</h4>
              <ul>
                <li>
                  RRSPs can hold a wide range of investments, including stocks,
                  bonds, mutual funds, exchange-traded funds (ETFs), and
                  Guaranteed Investment Certificates (GICs).
                </li>
                <li>
                  You can choose between a managed RRSP, where a financial
                  institution handles the investments, or a self-directed RRSP,
                  which allows you to manage your own portfolio.
                </li>
              </ul>
            </li>
            <li>
              <h4>Spousal RRSPs</h4>
              <ul>
                <li>
                  A spousal RRSP allows a higher-income spouse to contribute to
                  an RRSP in their partner's name. This strategy can help split
                  income during retirement, potentially reducing the overall tax
                  burden.
                </li>
              </ul>
            </li>
          </ol>
          <h2 className="header">Considerations</h2>
          <p>
            <ul>
              <li>
                <strong>Contribution Deadlines:</strong> Contributions for a
                given tax year must be made by the first 60 days of the
                following year.
              </li>
              <li>
                <strong>Withdrawal Penalties:</strong> Early withdrawals
                (outside of HBP or LLP) are subject to withholding taxes and may
                increase your taxable income for the year.
              </li>
              <li>
                <strong>Mandatory Conversion:</strong> By the end of the year
                you turn 71, your RRSP must be converted into a Registered
                Retirement Income Fund (RRIF) or an annuity, or the funds must
                be withdrawn.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

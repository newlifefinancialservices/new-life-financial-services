import { Table } from "react-bootstrap";

export default function TravelInsurance() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/travel-insurance-header.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>Travel Insurance</h1>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <p>Explore the world with confidence</p>
          <p>
            You’ve put all the plans in place to make your dream trip a reality.
            Now it’s time to make your well-being a priority by choosing to
            protect your health and finances. Travel insurance can help by
            covering costs related to emergency medical care and the
            cancellation or interruption of your trip, with expert 24/7
            assistance and guided care in the moments you need it most.
          </p>
          <h2 className="header">Have a look at our solutions</h2>
          <h4>Available Plans:</h4>
          <Table responsive="sm">
            {/* <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>Emergency Medical Plan</td>
                <td>
                  Includes coverage for medical emergencies along with valuable
                  travel assistance benefits for Canadian residents.
                </td>
              </tr>
              <tr>
                <td>Trip Cancellation and Interruption Plan</td>
                <td>
                  Coverage in case your trip needs to be unexpectedly cancelled
                  or interrupted due to a covered reason.
                </td>
              </tr>
              <tr>
                <td>Comprehensive Package</td>
                <td>
                  Includes emergency medical, trip cancellation, interruption
                  and delay due to a covered reason, baggage benefits and more
                  for comprehensive protection before and after you depart.
                </td>
              </tr>
              <tr>
                <td>Trip Interruption Plan</td>
                <td>
                  Coverage in case your trip is unexpectedly interrupted due to
                  a covered reason.
                </td>
              </tr>
              <tr>
                <td>Non-medical Package</td>
                <td>
                  Offers protection for before and after you depart including
                  coverage for trip cancellation, interruption and delay due to
                  a covered reason, baggage benefits and more.
                </td>
              </tr>
              <tr>
                <td>Youth Plan</td>
                <td>
                  Includes emergency medical, trip cancellation, interruption
                  and delay due to a covered reason, baggage benefits and more
                  for comprehensive protection at a preferred rate for younger
                  travellers.
                </td>
              </tr>
              <tr>
                <td>Emergency Medical Multi-trip Plan</td>
                <td>
                  Includes emergency medical coverage on an unlimited amount of
                  trips within the year.
                </td>
              </tr>
              <tr>
                <td>Comprehensive Multi-trip Package</td>
                <td>
                  Includes emergency medical, trip cancellation, interruption
                  and delay due to a covered reason, baggage benefits and more
                  for comprehensive protection on an unlimited amount of trips
                  within the year, up to 15 days per trip.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-6 justify-content-center d-flex">
          <img
            src="../images/travel-insurance.jpg" // Replace with the actual path to your logo
            alt="New Life Financial Services Logo"
            width="600"
            height="600"
            className="d-inline-block align-top me-2 bg-light  rounded-5"
          />
        </div>
      </div>
    </div>
  );
}

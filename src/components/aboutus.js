export default function AboutUs() {
  return (
    <div className="text-start container mt-3">
      <img
        src="../images/about-us-header.jpg"
        alt="About Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "600px" }}
      />
      <h1>About Us</h1>
      <div className="row align-items-center mt-4 bg-light p-4 rounded">
        <p>
          At New Life Financial Services, we understand that every financial
          journey is unique. Since our inception, we've been committed to
          empowering individuals, families, and businesses to achieve their
          financial goals with confidence. Our team of experienced professionals
          works diligently to provide tailored financial solutions, combining
          expertise with a personalized approach. Whether you're planning for
          retirement, managing investments, or navigating the complexities of
          wealth management, we partner with you every step of the way to ensure
          your financial well-being. With a foundation built on trust,
          transparency, and integrity, New Life Financial Services strives to
          deliver exceptional value and innovative strategies. We believe in
          creating lasting relationships and helping our clients build a secure
          and prosperous future. Your goals are our priority. Together, let's
          turn life's financial aspirations into realities.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="mt-5">
        <h2>Our Team</h2>
        <div className="row mt-4">
          {/* Team Member 1 */}
          <div className="col-md-6 text-center">
            {/* <p className="text-muted">Financial Advisor</p> */}
            <img
              src="../images/nav.jpg" // Replace with the actual path to the image
              alt="Team Member 1"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5>Navpreet Kaur</h5>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-6 text-center">
            {/* <p className="text-muted">Investment Specialist</p> */}
            <img
              src="../images/man1.jpg" // Replace with the actual path to the image
              alt="Team Member 2"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h5>Manjeet Singh</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

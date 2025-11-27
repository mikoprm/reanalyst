import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profilePic from "../assets/profile-pic.webp";
import profilePic2 from "../assets/profile-pic2.webp";
import aboutPic from "../assets/about-pic.webp";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section aria-labelledby="hero">
          <div className="wrapper-contents hero">
            <img
              src={profilePic2}
              alt="Profile image"
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
              className="hero__img"
            />
            <h1 id="hero" className="hero__title h2">
              Hi, I'm Rea
            </h1>
            <span className="h4">Professional Business & Data Analyst</span>
            <p>
              Understand, interpret, and predict patterns in business <br /> and
              then use those data-driven insights to improve your business
              practices.
            </p>
            <button className="btn-gradient">Connect with me</button>
          </div>
        </section>
        <section aria-labelledby="about">
          <div className="wrapper-contents about">
            <h2 id="about" className="text-center">
              About Me
            </h2>
            <article className="about__contents">
              <img
                src={aboutPic}
                alt="about image"
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                className="about__img"
              />
              <article className="about__article">
                <p>
                  As a professional <b>Business and Data Analyst</b>, I
                  specialize in transforming complex data into clear, actionable
                  insights that drive strategic decision-making, operational
                  efficiency, and business growth. With a strong foundation in
                  data analysis, business intelligence, and process
                  optimization, I bridge the gap between technical insights and
                  real-world business needs.
                </p>
                <p>
                  In cross-functional environments, I collaborate with
                  stakeholders to define KPIs, streamline workflows, and design
                  reporting solutions that empower leaders to make informed
                  decisions. Whether it’s forecasting demand, optimizing
                  processes, enhancing customer experience, or evaluating
                  financial performance, I focus on delivering clarity,
                  accuracy, and measurable results.
                </p>
                <p>
                  Driven by curiosity and continuous improvement, I am committed
                  to using data not just to explain what happened—but to predict
                  what will happen next and recommend the best path forward.
                </p>
                <b>What I Bring</b>
                <ul className="about__list">
                  <li>
                    <p>
                      A solid understanding of data analysis, business
                      intelligence, and exploratory data techniques.
                    </p>
                  </li>
                  <li>
                    <p>
                      Hands-on experience with SQL, Python, Excel, and
                      visualization tools like Tableau/Power BI.
                    </p>
                  </li>
                  <li>
                    <p>
                      The ability to communicate insights in a way that is
                      accessible and aligned with business goals.
                    </p>
                  </li>
                  <li>
                    <p>
                      A continuous-learning mindset and strong attention to
                      detail.
                    </p>
                  </li>
                </ul>
                <b>My Goal</b>
                <p>
                  To help organizations make confident, data-driven
                  decisions—and to keep growing as an analyst who turns
                  information into innovation.
                </p>
              </article>
            </article>
          </div>
        </section>
        <section aria-labelledby="projects">
          <div className="wrapper-contents projects">
            <article className="projects__heading text-center">
              <h2 id="projects">My Projects</h2>
              <p>
                Each project reflects a combination of analytical rigor,
                business understanding, and data visualization skills.
              </p>
            </article>
            <div className="projects__gallery">
              <article className="projects__card">
                <h3 className="project__title">
                  Customer Onboarding Process Improvement
                </h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Analyzed and redesigned the onboarding process for a
                      financial services company
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Conducted stakeholder interviews,
                      mapped As-Is/To-Be processes, identified bottlenecks, and
                      proposed automation steps.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Reduced onboarding time by 30% and
                      increased customer satisfaction by 15%
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
              <article className="projects__card">
                <h3 className="project__title">Sales Performance Dashboard</h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Built an interactive dashboard for tracking retail sales
                      performance.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Extracted and cleaned sales data using
                      SQL, visualized KPIs and trends in Power BI, created
                      drill-down insights for regional managers.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Improved decision-making speed and enabled
                      the sales team to increase quarterly sales by 10%.
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
              <article className="projects__card">
                <h3 className="project__title">Customer Churn Prediction</h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Developed a predictive model to identify customers likely
                      to churn.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Performed EDA, feature engineering,
                      and trained logistic regression and random forest models.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Identified 20% of high-risk customers,
                      enabling targeted retention campaigns that reduced churn
                      by 12%.
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
              <article className="projects__card">
                <h3 className="project__title">
                  Market Entry Feasibility Study
                </h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Conducted analysis for a retail company planning to expand
                      into a new region
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Performed SWOT and PESTLE analysis,
                      competitor benchmarking, market sizing, and financial
                      projections.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Recommended entry into 2 strategic
                      regions, projected $2M additional annual revenue.
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
              <article className="projects__card">
                <h3 className="project__title">
                  Customer Segmentation for Marketing Campaigns
                </h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Segmented customers to improve targeted marketing
                      strategies
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Applied clustering algorithms on
                      transactional and behavioral data, created detailed
                      customer profiles.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Increased marketing campaign engagement by
                      25% and improved ROI of promotions.
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
              <article className="projects__card">
                <h3 className="project__title">
                  KPI Framework & Business Metrics Dashboard
                </h3>
                <ul className="project__list">
                  <li>
                    <p>
                      Designed a KPI framework for a company’s sales and
                      operations teams
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What I Did : </b>Collected requirements from
                      stakeholders, defined KPIs, linked metrics to data
                      sources, and created a dashboard prototype.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Result : </b>Standardized performance measurement
                      across departments, enabling faster and more accurate
                      decision-making.
                    </p>
                  </li>
                </ul>
                <a href="#" className="project__btn btn btn-gradient">
                  View Project
                </a>
              </article>
            </div>
          </div>
        </section>
        <section aria-labelledby="contact" className="contact__section">
          <div className="wrapper-contents contact text-center">
            <h2 id="contact">💬 Let’s Connect</h2>
            <p>
              Send me a message and I’ll get back to you as soon as possible.
              <br /> I look forward to working together and helping your
              organization make smarter, data-driven decisions. <br />
              I’m always open to discussing new projects, data challenges, or
              collaboration opportunities. <br /> If you’re looking for support
              with analytics, reporting, business strategy, or data-driven
              decision-making. <br /> Feel free to reach out.
            </p>
            <section aria-labelledby="contact" className="contact__media">
              <p>
                <b>
                  📧 Email : <a href="#">reanalyst@email.com</a>
                </b>
              </p>
              <p>
                <b>
                  🔗 LinkedIn : <a href="#">reanalyst</a>
                </b>
              </p>
            </section>
            <p>
              <b>🌐 Location :</b>
              <br />
              Jakarta / IDN — available for remote and on-site work depending on
              project needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;

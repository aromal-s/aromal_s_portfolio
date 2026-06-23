import "./Portfolio.css";
import everlock from "../assets/everlock_fencing_screenshot.png";
import eduford from "../assets/eduford_university_screenshot.png";

function Portfolio() {
  const projects = [
    {
      title: "Everlock Fencing Constructions",
      description: "A professional fencing contractor website featuring services showcase, interactive gallery, and direct WhatsApp contact option.",
      image: everlock,
      link: "https://aromal-s.github.io/everlock-fencing-constructions/",
    },
    {
      title: "Eduford University Website",
      description: "An elegant university website featuring dynamic course categories, campus showcases, facilities list, and student testimonials.",
      image: eduford,
      link: "https://aromal-s.github.io/simple-static-website/index.html",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h1 className="portfolio-title">My Portfolio</h1>
      <span className="portfolio-desc">
        Here are some of the websites I have designed and developed. Click on any card to visit the live website.
      </span>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
            key={index}
          >
            <div className="portfolio-img-container">
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <span className="portfolio-visit-btn">Visit Website</span>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

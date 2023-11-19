import { Button } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Srutika</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Passionate Full Stack Web Developer and Amateur UI/UX Designer,
            Crafting Innovative Digital Experiences.
            <br />
            <br />
          </p>
        </div>

        <a
          href="./img/RESUME.pdf"
          download="RESUME.pdf"
          className="btn btn-primary"
        >
          Download Resume
        </a>

        {/* <button className="btn btn-primary">Download Resume</button> */}
      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.svg" alt="Hero Section" />
      </div>
    </section>
  );
}

import React from "react";
import "../style.css";
import "../general.css";

const HeroSection = ({ title, description, sigils, heroImage, ctaLink }) => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">{title}</h1>
          <p className="hero-description">{description}</p>
          <a href={ctaLink} className="btn btn--full margin-right-sm">
            Start reviewing
          </a>
          <a href={ctaLink} className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="choose-houses">
            <div className="got-houses">
              {sigils.map((sigil, index) => (
                <img key={index} src={sigil.src} alt={sigil.alt} />
              ))}
            </div>
            <p className="house-text">Navigate your allegiance in Westeros!</p>
          </div>
        </div>
        <div className="hero-img-box">
          <img src={heroImage.src} className="hero-img" alt={heroImage.alt} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

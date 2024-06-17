import React from "react";
import "../general.css";
import "../style.css";

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Westeros Awaits: Interactive Fan Hub for Game of Thrones Reviews and
            Discussions
          </h1>
          <p className="hero-description">
            Game of Thrones Quest offers a dynamic space for fans to explore,
            rate, and discuss the captivating novels from the "A Song of Ice and
            Fire" series and the thrilling HBO TV adaptation.
          </p>
          <a href="/" className="btn btn--full margin-right-sm">
            Start reviewing
          </a>
          <a href="/" className="btn btn--outline">
            Learn more &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src="img/hero.png"
            className="hero-img"
            alt="Jon Snow with Ghost, Daenerys and dragons, house sigils"
          />
        </div>
        <div className="choose-houses">
          <div className="got-houses">
            <img src="/img/sigil/sigil-1.webp" alt="House Baratheon" />
            <img src="/img/sigil/sigil-2.webp" alt="House Stark" />
            <img src="/img/sigil/sigil-3.webp" alt="House Martell" />
            <img src="/img/sigil/sigil-4.webp" alt="House Lannister" />
            <img src="/img/sigil/sigil-5.webp" alt="House Tully" />
            <img src="/img/sigil/sigil-6.webp" alt="House Greyjoy" />
            <img src="/img/sigil/sigil-7.webp" alt="House Targaryen" />
          </div>
          <p className="house-text">Navigate your allegiance in Westeros!</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

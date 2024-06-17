import React from "react";
import "../general.css";
import "../style.css";

function SeasonSection() {
  const seasons = [
    {
      id: 1,
      image: "/img/seasons/s1.webp",
      title: "Season One",
      year: "2011",
      episodes: "8",
      rating: "4.9",
    },
    {
      id: 2,
      image: "/img/seasons/s2.webp",
      title: "Season Two",
      year: "2012",
      episodes: "8",
      rating: "4.9",
    },
    {
      id: 3,
      image: "/img/seasons/s3.webp",
      title: "Season Three",
      year: "2013",
      episodes: "8",
      rating: "4.9",
    },
    {
      id: 4,
      image: "/img/seasons/s4.jpg",
      title: "Season Four",
      year: "2014",
      episodes: "8",
      rating: "4.9",
    },
  ];

  return (
    <section className="section-seasons">
      <div className="container">
        <span className="subheading">HBO TV Series</span>
        <h2 className="heading-secondary">Game of Thrones</h2>
      </div>
      <div className="container grid grid--4-cols margin-bottom-md">
        {seasons.map((season) => (
          <div className="season" key={season.id}>
            <img
              src={season.image}
              className="season-img"
              alt={`Game of Thrones ${season.title}`}
            />
            <div className="season-content">
              <div className="season-tags">
                <span className="tag">{season.year}</span>
              </div>
              <p className="season-title">{season.title}</p>
              <ul className="season-attributes">
                <li className="season-attribute">
                  <ion-icon
                    className="season-icon"
                    name="tv-outline"
                  ></ion-icon>
                  <span>
                    <strong>{season.episodes}</strong> Episodes
                  </span>
                </li>
                <li className="season-attribute">
                  <ion-icon
                    className="season-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>{season.rating}</strong> rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="container all-seasons">
        <a href="/" className="link">
          See all seasons &rarr;
        </a>
      </div>
    </section>
  );
}

export default SeasonSection;

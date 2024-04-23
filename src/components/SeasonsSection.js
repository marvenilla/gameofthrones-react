import React, { useState } from "react";
import "../style.css";
import "../general.css";

const SeasonsSection = ({ seasons }) => {
  // Initializing state for season ratings
  const [seasonRatings, setSeasonRatings] = useState(
    seasons.map((season) => ({
      id: season.id,
      rating: season.rating,
    }))
  );

  // Function to handle rating change
  const handleRatingChange = (id, newRating) => {
    const updatedRatings = seasonRatings.map((season) => {
      if (season.id === id) {
        return { ...season, rating: newRating };
      }
      return season;
    });
    setSeasonRatings(updatedRatings);
  };

  const navigateToSeasonEpisodes = (seasonId) => {
    console.log(`Navigate to episodes of season ${seasonId}`);
  };

  return (
    <section className="section-seasons">
      <div className="container">
        <span className="subheading">HBO TV Series</span>
        <h2 className="heading-secondary">Game of Thrones</h2>
      </div>

      <div className="container grid grid--4-cols margin-bottom-md">
        {seasons.map((season) => (
          <div key={season.id} className="season">
            <img
              src={season.image}
              className="season-img"
              alt={season.title}
              onClick={() => navigateToSeasonEpisodes(season.id)}
              style={{ cursor: "pointer" }}
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
                    <strong>
                      <input
                        type="number"
                        value={
                          seasonRatings.find(
                            (rating) => rating.id === season.id
                          ).rating
                        }
                        onChange={(e) =>
                          handleRatingChange(season.id, e.target.value)
                        }
                        style={{ width: "50px" }}
                      />
                    </strong>{" "}
                    rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="container all-seasons">
        <a href="#" className="link">
          See all seasons &rarr;
        </a>
      </div>
    </section>
  );
};

export default SeasonsSection;

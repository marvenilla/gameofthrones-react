import React, { useState } from "react";
import "../style.css";
import "../general.css";

const BookSection = ({ books }) => {
  // Initializing state for book ratings
  const [bookRatings, setBookRatings] = useState(
    books.map((book) => ({
      id: book.id,
      rating: book.rating,
    }))
  );

  // Function to handle rating change
  const handleRatingChange = (id, newRating) => {
    const updatedRatings = bookRatings.map((book) => {
      if (book.id === id) {
        return { ...book, rating: newRating };
      }
      return book;
    });
    setBookRatings(updatedRatings);
  };

  return (
    <section className="section-books">
      <div className="container">
        <span className="subheading">Books</span>
        <h2 className="heading-secondary">A Song of Ice and Fire Series</h2>
      </div>

      <div className="container grid grid--4-cols margin-bottom-md">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img
              src={book.image}
              className="book-img"
              alt={`${book.title} Book`}
            />
            <div className="book-content">
              <div className="book-tags">
                <span className="tag">{book.year}</span>
              </div>
              <p className="book-title">{book.title}</p>
              <div className="book-attributes">
                <li className="book-attribute">
                  <ion-icon
                    className="book-icon"
                    name="book-outline"
                  ></ion-icon>
                  <span>
                    Book <strong>{book.id}</strong>
                  </span>
                </li>
                <li className="book-attribute">
                  <ion-icon
                    className="book-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>
                      <input
                        type="number"
                        value={
                          bookRatings.find((rating) => rating.id === book.id)
                            .rating
                        }
                        onChange={(e) =>
                          handleRatingChange(book.id, e.target.value)
                        }
                        style={{ width: "50px" }}
                      />
                    </strong>{" "}
                    rating
                  </span>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container all-books">
        <a href="#" className="link">
          See all books &rarr;
        </a>
      </div>
    </section>
  );
};

export default BookSection;

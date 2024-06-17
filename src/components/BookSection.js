import React from "react";
import "../general.css";
import "../style.css";

function BookSection() {
  const books = [
    {
      id: 1,
      image: "/img/books/book1.jpg",
      title: "A Game of Thrones",
      year: "1996",
      rating: "4.9",
    },
    {
      id: 2,
      image: "/img/books/book2.jpg",
      title: "A Clash of Kings",
      year: "1998",
      rating: "4.9",
    },
    {
      id: 3,
      image: "/img/books/book3.jpg",
      title: "A Storm of Swords",
      year: "1998",
      rating: "4.9",
    },
    {
      id: 4,
      image: "/img/books/book4.jpg",
      title: "A Feast for Crows",
      year: "2005",
      rating: "4.9",
    },
  ];

  return (
    <section className="section-books">
      <div className="container">
        <span className="subheading">Books</span>
        <h2 className="heading-secondary">A Song of Ice and Fire Series</h2>
      </div>
      <div className="container grid grid--4-cols margin-bottom-md">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <img src={book.image} className="book-img" alt={book.title} />
            <div className="book-content">
              <div className="book-tags">
                <span className="tag">{book.year}</span>
              </div>
              <p className="book-title">{book.title}</p>
              <ul className="book-attributes">
                <li className="book-attribute">
                  <ion-icon
                    className="book-icon"
                    name="book-outline"
                  ></ion-icon>
                  <span>
                    Book <strong>One</strong>
                  </span>
                </li>
                <li className="book-attribute">
                  <ion-icon
                    className="book-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>{book.rating}</strong> rating
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="container all-books">
        <a href="/" className="link">
          See all books &rarr;
        </a>
      </div>
    </section>
  );
}

export default BookSection;

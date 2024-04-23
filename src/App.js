import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import SeasonsSection from "./components/SeasonsSection";
import "./style.css";
import "./general.css";

const navLinks = [
  { name: "Forum", path: "#", cta: false },
  { name: "About", path: "#", cta: false },
  { name: "Sign In", path: "#", cta: true },
];

const heroContent = {
  title:
    "Westeros Awaits: Interactive Fan Hub for Game of Thrones Reviews and Discussions",
  description:
    "Game of Thrones Quest offers a dynamic space for fans to explore, rate, and discuss the captivating novels from the 'A Song of Ice and Fire' series and the thrilling HBO TV adaptation.",
  sigils: [
    { src: "img/sigil/sigil-1.webp", alt: "House Baratheon" },
    { src: "img/sigil/sigil-2.webp", alt: "House Stark" },
    { src: "img/sigil/sigil-3.webp", alt: "House Martell" },
    { src: "img/sigil/sigil-4.webp", alt: "House Lannister" },
    { src: "img/sigil/sigil-5.webp", alt: "House Tully" },
    { src: "img/sigil/sigil-6.webp", alt: "House Greyjoy" },
    { src: "img/sigil/sigil-7.webp", alt: "House Targaryen" },
  ],
  heroImage: {
    src: "img/hero.png",
    alt: "Jon Snow with Ghost, Daenerys and dragons, house sigils",
  },
  ctaLink: "#",
};
const bookData = [
  {
    id: 1,
    title: "A Game of Thrones",
    year: "1996",
    image: "img/books/book1.jpg",
    rating: "4.9",
  },
  {
    id: 2,
    title: "A Clash of Kings",
    year: "1998",
    image: "img/books/book2.jpg",
    rating: "4.9",
  },
  {
    id: 3,
    title: "A Storm of Swords",
    year: "2000",
    image: "img/books/book3.jpg",
    rating: "4.9",
  },
  {
    id: 4,
    title: "A Feast for Crows",
    year: "2005",
    image: "img/books/book4.jpg",
    rating: "4.9",
  },
];

const seasonData = [
  {
    id: 1,
    year: "2011",
    title: "Season One",
    episodes: 8,
    image: "img/seasons/s1.webp",
    rating: "4.9",
  },
  {
    id: 2,
    year: "2012",
    title: "Season Two",
    episodes: 8,
    image: "img/seasons/s2.webp",
    rating: "4.9",
  },
  {
    id: 3,
    year: "2013",
    title: "Season Three",
    episodes: 8,
    image: "img/seasons/s3.webp",
    rating: "4.9",
  },
  {
    id: 4,
    year: "2014",
    title: "Season Four",
    episodes: 8,
    image: "img/seasons/s4.jpg",
    rating: "4.9",
  },
];
function App() {
  return (
    <div>
      <Header navLinks={navLinks} />
      <HeroSection {...heroContent} />
      <BookSection books={bookData} />
      <SeasonsSection seasons={seasonData} />
    </div>
  );
}

export default App;

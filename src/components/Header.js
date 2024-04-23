import React, { useState } from "react";
import Modal from "./Modal";

const Header = ({ navLinks }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <header className="header">
        <img
          className="logo"
          alt="Game of Thrones Quest Logo"
          src="/img/gameofthrones-logo.png"
        />
        <nav className="main-nav">
          <ul className="main-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className={`main-nav-link ${link.cta ? "nav-cta" : ""}`}
                  href={link.path}
                  onClick={showModal}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* The modal component */}
      <Modal isVisible={isModalVisible} hideModal={hideModal} />
    </>
  );
};

export default Header;

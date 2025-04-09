import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const menuItems = [
    { name: "Правила", path: "/rules" },
    { name: "За что могут дать бан", path: "/ban" },
    { name: "За что могут дать предупреждение", path: "/warning" },
    { name: "Запрещено первый день вайпа", path: "/first-day" },
    { name: "Техника", path: "/tech" },
    { name: "Постройка", path: "/building" },
    { name: "Администраторы сервера", path: "/admins" },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div>
      <header className="header">Эпоха выживания</header>
      <div className="main-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`menu-button ${activeItem === index ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <footer className="footer">© 2025 Эпоха выживания. Все права защищены.</footer>
    </div>
  );
};

export default MainMenu;

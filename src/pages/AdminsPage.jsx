import React from 'react';
import { Link } from 'react-router-dom';
import './AdminsPage.css';

const AdminsPage = () => {
  return (
    <div className="admins-page">
      <header className="header">Администраторы сервера</header>
      <main className="main-content">
        <h2>Наша команда</h2>
        <div className="admins-container">
          <div className="admin-card">
            <img src="/images/dragon.jpg" alt="Основатель проекта" className="admin-image" />
            <h3 className="admin-name">Основатель Проекта</h3>
            <a href="https://t.me/Dragon010101" target="_blank" rel="noopener noreferrer" className="telegram-button">
              <img src="/images/telegram-icon.png" alt="Telegram" className="telegram-icon" />
              Dragon
            </a>
          </div>
          <div className="admin-card">
            <img src="/images/funtik.jpg" alt="Администратор 1" className="admin-image" />
            <h3 className="admin-name">Администратор 1</h3>
            <a href="https://web.telegram.org/a/#6008153078" target="_blank" rel="noopener noreferrer" className="telegram-button">
              <img src="/images/telegram-icon.png" alt="Telegram" className="telegram-icon" />
              中丫廾丁仈长
            </a>
          </div>
          <div className="admin-card">
            <img src="/images/alex.jpg" alt="Администратор 2" className="admin-image" />
            <h3 className="admin-name">Администратор 2</h3>
            <a href="https://web.telegram.org/a/#389746882" target="_blank" rel="noopener noreferrer" className="telegram-button">
              <img src="/images/telegram-icon.png" alt="Telegram" className="telegram-icon" />
              Alex
            </a>
          </div>
        </div>
        <Link to="/" className="menu-button">Главное меню</Link>
      </main>
      <footer className="footer">© 2025 Эпоха выживания. Все права защищены.</footer>
    </div>
  );
};

export default AdminsPage;

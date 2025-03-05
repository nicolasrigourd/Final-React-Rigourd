
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Mi Tienda</h3>
          <p>Tu tienda en línea para productos increíbles.</p>
        </div>

        
        <div className="footer-column">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/ofertas">Ofertas</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/perfil">Perfil</a></li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nicolas Rigourd. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

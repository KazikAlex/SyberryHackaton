import React from 'react';
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <nav>
                <ul className="footer-internal-links">
                    <li><a href="#" className="footer-internal-links__link">Features</a></li>
                    <li><a href="#" className="footer-internal-links__link">About</a></li>
                    <li><a href="#" className="footer-internal-links__link">Testimonials</a></li>
                    <li><a href="#" className="footer-internal-links__link">Contact</a></li>
                    <li><a href="#" className="footer-internal-links__link">Download</a></li>
                </ul>
            </nav>
            <div className="footer-external-links">
                <div className="footer-external-links__links">
                    <p>Follow us</p>
                    <a href="#" className="footer-external-link">Facebook</a>
                    <a href="#" className="footer-external-link">Twitter</a>
                    <a href="#" className="footer-external-link">Instagram</a>
                    <a href="#" className="footer-external-link">Youtube</a>
                </div>
                <div className="footer-external-links__contact-info">
                    <p>1717 Harrison St. San Francisco, CA 94103, USA</p>
                    <p>© 2022 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
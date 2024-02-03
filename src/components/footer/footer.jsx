import React from 'react';
import './footer.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <div className="footer">
            <nav>
                <ul className="footer-internal-links">
                    <li><a href="#" className="footer-internal-links__link">Features</a></li>
                    <li><a href="#" className="footer-internal-links__link">About</a></li>
                    <li><a href="#" className="footer-internal-links__link">Testimonials</a></li>
                    <li><a href="#" className="footer-internal-links__link">Contact</a></li>
                    <li><a href="#" className="footer-internal-links__link last-internal-link">Download</a></li>
                </ul>
            </nav>
            <div className="footer-external-links">
                <div className="footer-external-links__links">
                    <p>Follow us</p>
                    <a href="#" className="footer-external-links__icon"><FacebookOutlinedIcon /></a>
                    <a href="#" className="footer-external-links__icon"><TwitterIcon /></a>
                    <a href="#" className="footer-external-links__icon"><InstagramIcon /></a>
                    <a href="#" className="footer-external-links__icon"><YouTubeIcon /></a>
                </div>
                <div className="footer-external-links__contact-info">
                    <p>1717 Harrison St. San Francisco, CA 94103, USA</p>
                    <p>© 2022 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
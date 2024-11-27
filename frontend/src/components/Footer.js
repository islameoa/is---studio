import '../styles/Footer.css';
import instagramLogo from '../images/instagram.png';
import tiktokLogo from '../images/tik-tok.png';
import youtubeLogo from '../images/youtube.png';
import xLogo from '../images/gorjeo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logos">
                <img src={instagramLogo} alt="Instagram" className="socialLogo" />
                <img src={tiktokLogo} alt="TikTok" className="socialLogo" />
                <img src={xLogo} alt="X" className="socialLogo" />
                <img src={youtubeLogo} alt="YouTube" className="socialLogo" />
            </div>
            <div className="footer-text">
                is___studio © 2024
            </div>
        </div>
    );
};

export default Footer;
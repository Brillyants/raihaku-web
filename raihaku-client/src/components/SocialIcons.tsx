import linkedinLogo from "../assets/img/linkedin-logo.svg";
import whatsappLogo from "../assets/img/whatsapp-logo.png";
import instagramLogo from "../assets/img/instagram-logo.svg";
import githubLogo from "../assets/img/github-logo.png";

const SocialIcons = () => {
  return (
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/andrew-brillyant/">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a href="http://wa.me/6285174419022" target="_blank">
        <img src={whatsappLogo} alt="WhatsApp" />
      </a>
      <a href="https://github.com/Brillyants" target="_blank">
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a href="https://instagram.com/andrewbrillyant" target="_blank">
        <img src={instagramLogo} alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialIcons;

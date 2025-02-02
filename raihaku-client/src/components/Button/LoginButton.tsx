import { FaUser } from "react-icons/fa";
import "../../style/Button.css";

const LoginButton = () => {
  return (
    <div className="login-button">
      <a href="https://google.com" target="_blank">
        <button>
          <FaUser className="me-3" />
          Login
        </button>
      </a>
    </div>
  );
};

export default LoginButton;

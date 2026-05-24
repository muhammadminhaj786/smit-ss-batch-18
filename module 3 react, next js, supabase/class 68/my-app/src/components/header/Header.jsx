import { Button } from "../button/Button";
import "./Header.css";
export function Header() {
  return (
    <div className="nav">
      <div className="first">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Info</li>
        </ul>
      </div>
      <div className="second">
        <Button />
      </div>
    </div>
  );
}

import { useState } from "react";
function Nav() {
  const [language, setLanguage] = useState("");
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value);
  };
  return (
    <div className="navMain">
      <div className="title">Climate</div>
      <div>
        <select onChange={handleLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  );
}
export default Nav;

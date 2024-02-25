const { Link } = require("react-router-dom");
const { useState } = require("react");

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <nav className="">
      <ul className="flex gap-2 p-2 justify-between">
        <li className="nav-blob">
          <Link className="mx-3" to="/">
            Devmate.io
          </Link>
        </li>
        <li className="nav-blob flex w-max break-keep gap-2">
          <img
            src="https://via.placeholder.com/50"
            alt="profile"
            className=" rounded-lg"
          />
          <span className="break-keep">John Doe</span>
          <button
            className="border-r-2 border-b-2 rotate-45 border-solid border-black w-3 h-3"
            onClick={() => {
              setShowSettings(!showSettings);
            }}
          />
          {showSettings && (
            <div className="absolute top-16 font-thin text-lg right-4 bg-white p-2 rounded-lg shadow-lg">
              <ul>
                <li className="nav-blob settingsOption">
                  <Link to="/settings">Settings</Link>
                </li>
                <li className="nav-blob settingsOption">
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

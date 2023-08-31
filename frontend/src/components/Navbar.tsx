import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
          <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/reminders">Reminders</NavLink>
              </li>
              <li>
                  <NavLink to="/broken">Broken route</NavLink>
              </li>
          </ul>
      </nav>
    );
}

export default Navbar;
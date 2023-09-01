import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
          <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/notes">Notes</NavLink>
              </li>
              <li>
                  <NavLink to="/broken">Broken route</NavLink>
              </li>
          </ul>
      </nav>
    );
}

export default Navbar;
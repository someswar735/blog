import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Contact</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f32d2d',
          borderRadius: '8px' 
        }}>Add contact</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
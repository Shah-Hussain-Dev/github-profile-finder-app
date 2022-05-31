import PropTypes from "prop-types";
import { GoMarkGithub } from "react-icons/go";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = ({ title }) => {
  return (
    <>
      <Navbar className="navbar_main text-white shadow-lg mb-5">
        <Container>
          <Navbar.Brand className="links">
            <GoMarkGithub className="mr-2 github__icons" />
            <Link to="/">{title}</Link>
          </Navbar.Brand>
          <div
            className="d-flex justify-content-center "
            style={{ width: "200px" }}
          >
            <Link to="/" className="btn btn-outline-primary mr-3">
              Home
            </Link>
            <Link to="/about" className="btn btn-outline-light ">
              About
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

Header.defaultProps = {
  title: "Github Finder",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

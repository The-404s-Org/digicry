import { NavLink } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      {/* Background elements */}
      <div className="gradient-animation" />
      <div className="gradient-overlay" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          {/* App Title */}
          <Typography variant="h2" component="h1" className="main-title">
            Digi-Cry
          </Typography>

          {/* Navigation Placeholder */}
          <nav className="glass-container nav-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="journal"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Journal
            </NavLink>
          </nav>

          {/* Page Content */}
          <Box sx={{ mt: 4 }}>{children}</Box>
        </Box>
      </Container>
    </>
  );
}

export default Layout;

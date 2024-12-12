import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} DepressionApp | Designed with ❤️
      </p>
      <div style={styles.links}>
        <a href="https://example.com/privacy" style={styles.link}>
          Privacy Policy
        </a>
        <a href="https://example.com/terms" style={styles.link}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "auto",
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  text: {
    marginBottom: "10px",
    fontSize: "1rem",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s",
  },
};

export default Footer;

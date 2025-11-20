import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapper-contents footer">
        <a href="/" className="logo">
          Reanalyst
        </a>
        <p>&copy;{currentYear}. All Right Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-3 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-ganger">KBC 🌍</h4>
           <div className="col-md-4 mb-4">
  
  <p className="text-light" style={{ opacity: 0.8 }}>
    Stay updated with the latest news around the world.<br />
    Designed for modern readers.
  </p>
</div>

          </div>

          {/* Navigation Links */}
<div className="col-md-4 mb-4">
  <h5 className="text-light mb-3">Quick Links</h5>
  <ul className="list-unstyled">
    <li className="mb-2">
      <a href="#" className="text-light text-decoration-none">🏠 Home</a>
    </li>
    <li className="mb-2">
      <a href="#" className="text-light text-decoration-none">🇪🇹 Ethiopia</a>
    </li>
    <li className="mb-2">
      <a href="#" className="text-light text-decoration-none">🌍 Africa</a>
    </li>
    <li className="mb-2">
      <a href="#" className="text-light text-decoration-none">💻 Technology</a>
    </li>
  </ul>
</div>


          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-light mb-3">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.linkedin.com/in/kidist-tadesse-889851319/" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="https://instagram.com/Kid_ion12" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-telegram"></i></a>
              <a href="https://github.com/Kidtd12" className="text-light fs-4"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-gray" />

        <div className="text-center text-danger">
          © 2025 <strong>KBC</strong> | Built by kid_ion
        </div>
      </div>
    </footer>
  );
};

export default Footer;

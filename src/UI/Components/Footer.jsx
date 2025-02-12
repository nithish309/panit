const Footer = ({ theme }) => {
    return (
      <footer
        className="footer bg-base-300 text-base-content p-10 w-full md:h-screen lg:h-full"
        style={{
          backgroundColor: theme === "light" ? null : "#333",
          color: theme === "light" ? "black" : "#fff",
        }}
      >
        <nav>
          <h6 className="footer-title">Services</h6>
          <p>Custom Color Mixing</p>
          <p>Interior Painting</p>
          <p>Exterior Painting</p>
          <p>Paint Supplies</p>
        </nav>
  
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>+91 9876543210</p>
          <p>nkpaints@gmail.com</p>
          <p>12 Main Street, Perundurai</p>
        </nav>
  
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm6 16.5c0 .834-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.666-1.5-1.5v-9c0-.834.673-1.5 1.5-1.5h9c.827 0 1.5.666 1.5 1.5v9zm-9.5-9c-.275 0-.5.225-.5.5s.225.5.5.5.5-.225.5-.5-.225-.5-.5-.5zm3.5 1.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z" />
              </svg>
            </a>
  
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
  
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  
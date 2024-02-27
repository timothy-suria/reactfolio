import { useState } from "react";
import "../styles/contact.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "", submitted: true });
  };

  const useEffect =
    (() => {
      if (formData.submitted) {
        const timer = setTimeout(() => {
          setFormData((prevState) => ({ ...prevState, submitted: false }));
        }, 3000);
        return () => clearTimeout(timer);
      }
    },
    [formData.submitted]);

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me!</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i>
              timothyjonatansuria@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-square-phone"></i>08118100899
            </p>
            <div className="social-icons">
              <a href="mailto: timothyjonatansuria@gmail.com">
                <EmailIcon />
              </a>
              <a href="https://wa.me/08118100899">
                <WhatsAppIcon />
              </a>
              <a href="https://github.com/timothy-suria">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/timothy-suria-9a2111241/">
                <LinkedinIcon />
              </a>
            </div>
            <a href="/Professional CV Resume.pdf" download className="btn btn2">
              Download my CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            {formData.submitted && (
              <p style={{ color: "green" }}>Submitted successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { useState } from "react";
import "../styles/contact.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      <div class="container">
        <div class="row">
          <div class="contact-left">
            <h1 class="sub-title">Contact me!</h1>
            <p>
              <i class="fa-solid fa-paper-plane"></i>
              timothyjonatansuria@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-square-phone"></i>08118100899
            </p>
            <div class="social-icons">
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
            <a href="/Professional CV Resume.pdf" download class="btn btn2">
              Download my CV
            </a>
          </div>
          <div class="contact-right">
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
              <button type="Submit" className="btn btn2">
                Submit
              </button>
            </form>
            {formData.submitted && (
              <p style={{ color: "green" }}>Submitted successfully!</p>
            )}
          </div>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

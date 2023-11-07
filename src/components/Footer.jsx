import React from "react";

const Footer = () => {
  return (
    <footer className="contactFooter grid">
      <div className="footerCopy footerBlock flex-column">
        <h2 className="footerHeading">Contact</h2>
        <p className="sectionPara">
          For hiring inquiries, collaboration, or networking, feel free to get
          in touch with me!
        </p>
        <ul className="contactList">
          <li className="contactListItem">
            <a className="listLink email" href="#hero">
              fperezfrancisco4@gmail.com
            </a>
          </li>
          <li className="contactListItem">
            <a className="listLink phone" href="#hero">
              661.390.6504
            </a>
          </li>
        </ul>
      </div>
      <div className="footerForm footerBlock flex-column">
        <form className="contactForm flex-column">
          <ul className="formList flex-column">
            <li className="formItem flex">
              <input
                className="formName formInput"
                type="text"
                placeholder="Name*"
                id="formName"
                required
              />
            </li>
            <li className="formItem flex">
              <input
                className="formEmail formInput"
                type="email"
                placeholder="Email*"
                id="formEmail"
                required
              />
            </li>
            <li className="formItem flex">
              <textarea
                name="formMessage"
                rows="4"
                cols="50"
                id="formMessage"
                placeholder="Message*"
                className="formInput"
                required
              />
            </li>
          </ul>
          <button className="pageBtn submitBtn formBtn">Send Mesage</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [showPopup, setPopup] = useState<boolean>(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_wwucw1i", "template_dtrwapa", form.current, {
        publicKey: "vB5ALu6KILsXdapUp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setPopup(true);
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="from_email"
            className="email"
            placeholder="Your Email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          {showPopup && (
            <div className="popupOverlay">
              <div className="popup">
                <div className="checkmark">✓</div>
                <h2>Message Sent!</h2>
                <br />
                <p>Thank you for reaching out. I'll get back to you soon.</p>

                <button className="popupBtn" onClick={() => setPopup(false)}>
                  OK
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

"use client";

import React from "react";
import * as info from "@/constants/index";

const ContactForm = () => {
  const handleClick = () => {
    //$("#cform").submit();
  };

  return (
    <form id="cform" method="post" action={info.contactMe.ContactFormApi}>
      <h5>Write a message:</h5>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" name="name" id="name_field" />
          <label htmlFor="name_field">Your Name</label>
        </div>
        <div className="input-field col s12">
          <input type="text" name="email" id="email_field" />
          <label htmlFor="email_field">Your Email</label>
        </div>
        <div className="input-field col s12">
          <input type="text" name="subject" id="subject_field" />
          <label htmlFor="subject_field">Subject</label>
        </div>
        <div className="input-field col s12">
          <textarea
            name="message"
            id="message_field"
            className="materialize-textarea"
            defaultValue={""}
          />
          <label htmlFor="message_field">Message</label>
        </div>
      </div>
      <a className="btn waves-effect waves-light" onClick={handleClick}>
        Send Message
      </a>
    </form>
  );
};

export default ContactForm;

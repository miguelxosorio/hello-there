import React from "react";

function Contact() {
  return (
      <section>
          <h1>Contact Me</h1>
            <form>
                <div>
                    <input name="name" placeholder="Name"></input>
                </div>
                <div>
                    <input name="email" placeholder="Email"></input>
                </div>
                <div>
                    <textarea name="message" rows="5" placeholder="Message"></textarea>
                </div>
            </form>
      </section>
  )
}

export default Contact;
import emailjs from "emailjs-com";
import Styles from "./ContactForm.module.css";
import Button from "../UI/Button";

const ContactForm = () => {

  const formSubmitHandler= (e) =>{
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d7cpnt4",
        "template_ufa18ve",
        e.target,
        "99AhSG-6FLvVZhu94"
      )
      .then(
        (result) => {
          //console.log(result.text);
          const alartText = "Your message has been sent"
          const alartParagrap= document.querySelector(".formAlert");
          alartParagrap.innerHTML= alartText;
          alartParagrap.style.display = "block";
          setTimeout(function () {
            document.querySelector(".formAlert").style.display = "none";
          }, 3000);
        },
        (error) => {
          //console.log(error.text);
          const alartText = "Something wrong please try again";
          const alartParagrap = document.querySelector(".formAlert");
          alartParagrap.innerHTML = alartText;
          alartParagrap.style.display = "block";
          setTimeout(function () {
            document.querySelector(".formAlert").style.display = "none";
          }, 3000);
        }
      );
      e.target.reset();
  }

  return (
    <div className="contact-box">
      <h3 className={`${Styles.formAlert} formAlert`}>
        Your message has been sent
      </h3>
      <form id="contact-form" onSubmit={formSubmitHandler}>
        <input
          className={Styles.input}
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          required
        />
        <input
          className={Styles.input}
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          required
        />
        <input
          className={Styles.input}
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
        />
        <textarea
          className={Styles.textarea}
          name="message"
          rows="4"
          placeholder="Message"
          id="message"
          required
        ></textarea>
        <Button type="submit" icon="send" classname="formSendBtn">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useRef, useState } from "react";
import * as Yup from "yup";
import "./Contact.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openRespNavbar, setOpenRespNavbar] = useState(false);
  const recaptchaRef = useRef(null);
  const initialValues = {
    name: "",
    email: "",
    message: "",
    companyName: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
  });
  function handleOpenNavbar() {
    setOpenRespNavbar(!openRespNavbar);
  }
  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, validateForm }
  ) => {
    const errors = await validateForm();

    if (Object.keys(errors).length > 0) {
      setSubmitting(false);
      return;
    }

    setIsLoading(true);

    const serviceId = "service_pbsq97a";
    const templateId = "template_nu4sg9x";
    const publicKey = "vDi4DrAIM9_hOaYud";

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_companyName: values.companyName,
      to_name: "PRACTICAL SOLUTIONS GROUP",
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        resetForm();
        setIsMessageSent(true);
        toast.success("The message has been sent.");
        setCapVal(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset(); // Reset the ReCAPTCHA
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
        setIsLoading(false);
        setIsMessageSent(false); // Reset message sent state to allow further submissions
      });
  };
  const handleClick = (isSubmitting, capVal, handleSubmit) => {
    if (isSubmitting || !capVal) {
      toast.error("Confirm you are not a robot");
      return;
    }
    handleSubmit();
  };
  return (
    <section id="contact" className="contact">
      <h1 className="heading">get in touch</h1>
      <div className="contact-in">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form>
              <ReCAPTCHA
                ref={recaptchaRef} // Attach the ref to ReCAPTCHA
                className="recaptch"
                sitekey="6LdIJkoqAAAAAJEO4zc9M1Uj5eA5eNYMoQQ9HtVl"
                onChange={(val) => setCapVal(val)}
              />
                  <div className="box">
                    <Field type="text" name="name" placeholder="Your Name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="box">
                    <Field type="email" name="email" placeholder="Your Email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                <div className="box">
                  <Field
                    className={"textarea"}
                    type="text"
                    name="message"
                    placeholder="Your Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="box">
                  <Field
                    className={"textarea"}
                    type="text"
                    name="companyName"
                    placeholder="Your Company Name"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleClick(isSubmitting, capVal, handleSubmit)
                  }
                >
                  {isLoading ? (
                    <img src="https://i.gifer.com/ZKZg.gif" alt="Loading..." />
                  ) : (
                    "Send Message"
                  )}
                </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contact;

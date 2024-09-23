import React, { useRef, useState } from "react";
import * as Yup from "yup";
import "./Contact.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import Logo from '../../../Image/Logo.png'
import Image from '../../../Image/About.png'
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
      <div className="littleBox" style={{ backgroundImage: `url(${Image})` }}>
        <div className="leftBox">
          <h2 className="heading">Your Vision, Our Mission: Let's Shape Success Together.</h2>

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
                <button
                  type="button"
                  onClick={() =>
                    handleClick(isSubmitting, capVal, handleSubmit)
                  }
                >
                  {isLoading ? (
                    <img src="https://i.gifer.com/ZKZg.gif" alt="Loading..." />
                  ) : (
                    "Submit"
                  )}
                </button>
                <div className="box">
                  <Field
                    className={"textarea"}
                    type="text"
                    name="companyName"
                    placeholder="Describe Your Requirement"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="box">
                  <Field type="email" name="email" placeholder="Email Address" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="box">
                  <Field
                    type="text"
                    name="message"
                    placeholder="Company Name"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="box">
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error"
                  />
                </div>





              </Form>
            )}
          </Formik>
        </div>
        <div className="rightBox">
          <img src={Logo} alt="" />
          <h2>Thank you for your Interest in PSG UK</h2>
          <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

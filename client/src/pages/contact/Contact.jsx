import React, { useRef, useState } from "react";
import "./contact.css";
import CloseIcon from "@mui/icons-material/Close";

const axios = require("axios");

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [sent, setSent] = useState(false);
  const successRef = useRef();

  const showMsg = () => {
    successRef.current.classList.add("closeSuccessMsg");
  };
  const removeMsg = () => {
    setTimeout(() => {
      successRef.current.classList.remove("closeSuccessMsg");
      console.log(successRef);
    }, 2000).then(
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    );
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFocused({
      ...focused,
      [e.target.name]: true,
    });
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/", {
      // const res = await axios.post("http://localhost:5000/", {
      name: values.name,
      email: values.email,
      message: values.message,
    });

    if (res.status === 201) {
      showMsg();
      removeMsg();
    }
  };

  return (
    <div className="contactContainer" id="contact">
      <div className="blackContainer">
        <div className="contactTitle">Contact</div>
        <div className="successMsgWrapper" ref={successRef}>
          <p className="successMsg">Message sent</p>
          {/* <span> */}
          <CloseIcon className="cancel" />
          {/* </span> */}
        </div>
        <form className="contactContentContainer">
          <div className="name inputContainer">
            <label>Name</label>
            <input
              type="text"
              value={values["name"]}
              required
              onChange={handleChange}
              name="name"
              onBlur={handleFocus}
              namefocused={focused.name.toString()}
            />
            <p className="alert">Please provide the required credentail</p>
          </div>
          <div className="email inputContainer">
            <label>Email</label>
            <input
              type="email"
              value={values["email"]}
              required
              onChange={handleChange}
              name="email"
              onBlur={handleFocus}
              emailfocused={focused.email.toString()}
            />
            <p className="alert">Please input your email</p>
          </div>
          <div className="message inputContainer">
            <label>Message</label>
            <textarea
              name="message"
              value={values["message"]}
              cols="10"
              rows="3"
              onChange={handleChange}
              required
              onBlur={handleFocus}
              messagefocused={focused.message.toString()}
            ></textarea>
            <p className="alert">Field cannot be empty</p>
          </div>
          <button type="submit" className="send" onClick={handSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

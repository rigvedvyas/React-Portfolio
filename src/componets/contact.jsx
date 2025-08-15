import { useContext, useRef } from "react";
import ThemeContextStore from "../store/theme-store";
import style from "../css_modules/contact.module.css";
import { ToastContainer, toast } from 'react-toastify';

const Contact = ()=>{

    const {theme} = useContext(ThemeContextStore);
    const isDark = theme === "dark";

    const nameRef = useRef("");
    const emailRef = useRef("");
    const msgRef = useRef("");

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c313cdf6-31b2-425d-8315-258c02bcaf33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Message delivered successfully!",{
         position: "top-right",
        autoClose: 2000,}
       );
      nameRef.current.value = "";
      emailRef.current.value = "";
      msgRef.current.value = "";
    }
    else{
        toast.error("Failed to deliver",{
         position: "top-right",
        autoClose: 2000,}
       );
    }
  };

    return(
        <div className="container">
            <div className="row p-sm-2 p-lg-3 p-xxl-5 p-3 justify-content-between" data-aos="fade-up" data-aos-duration="1500">
                <div className="col-lg-5 mb-lg-0 mb-3">
                    <h2 className={`text-center contactHeadline mb-4 ${isDark ? style.contactSpecialContentDark : style.contactSpecialContentLight} mt-lg-0 mt-4 `} style={{fontFamily:"cursive"}}>Get In Touch</h2>
                    <p className={`text-center contactPara ${isDark ? style.contactNormalContentDark : style.contactNormalContentLight} m-0`}>Feel free to reach out to me for any queries or opportunities..!! Contact me at  
                         <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRrkzTfhvgMqjDrwppRgTgjGGNXWlSkxRjTMVhKSmQkHzjNSxxpbvpGvGnNndGtGrzFnpbG" target="_blank" style={{textDecoration:"none"}} className={`ps-2 ${isDark ? style.contactSpecialContentDark : style.contactSpecialContentLight}`}>rigved2vyas@gmail.com</a> or through this form.</p>
                    <div className="d-flex justify-content-center">
                        <img src="./images/contact.png" alt="" className="img-fluid contactUsImg" />
                    </div>
                </div>
                <div className="col-xxl-5 col-lg-6 px-sm-3 px-0 d-flex justify-content-center" >
                    <div className={`contactContainer p-sm-4 p-3 ${isDark ? style.contactFormBgDark : style.contactFormBgLight}`} style={{borderRadius:"8px"}}>
                        <div className="mb-3">
                             <span className={`${isDark ? style.contactNormalContentDark : style.contactNormalContentLight} formTagLine`}>Let’s Connect!</span>
                        </div>
                        <div className="contactForm">
                            <form onSubmit={onSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className={`form-control formInput ${isDark ? style.formInputDark : style.formInputLight}`} id="floatingInput" name="name" ref={nameRef} placeholder="" required />
                                <label htmlFor="floatingInput"  className={`${isDark ? style.contactNormalContentDark : style.contactNormalContentLight} `}>Your name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className={`form-control formInput ${isDark ? style.formInputDark : style.formInputLight}`} id="floatingInput" placeholder="name@example.com" name="email" ref={emailRef} required/>
                                <label htmlFor="floatingInput" className={`${isDark ? style.contactNormalContentDark : style.contactNormalContentLight}`}>Your email</label>
                            </div>
                            <div className="form-floating mb-2">
                                <textarea className={`form-control formInput ${isDark ? style.formInputDark : style.formInputLight}`} placeholder="Leave a comment here" id="floatingTextarea2" name="message" ref={msgRef} style={{height: "150px"}} required></textarea>
                                <label htmlFor="floatingTextarea2" className={`${isDark ? style.contactNormalContentDark : style.contactNormalContentLight} `}>Leave a message here...</label>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className={`contactSendBtn py-1 ${isDark ? style.contactSendBtnDark : style.contactSendBtnLight}`}>Send</button>
                            </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer toastStyle={{ marginTop: "80px" }} />
        </div>
    )
}

export default Contact;
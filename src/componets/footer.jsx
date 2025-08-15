import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useContext } from "react";
import ThemeContextStore from "../store/theme-store";
import style from "../css_modules/footer.module.css"

const Footer = () => {
    const {theme} = useContext(ThemeContextStore);
  return (
    <div className={`container ${theme == "dark" ? style.footerBgDark : style.footerBgLight }  footerContainer mt-5 `}>
      <div className="row">
        <div className={`col-lg-4 col-sm-5 col-12 d-flex align-align-items-center justify-content-sm-start justify-content-center`}>
            <div className="ps-2">
                <p className={`m-0  footer-pad ${theme == "dark" ? style.footItemsDark : style.footItemsLight} footItem1`}>Designed and Developed by <br  className="breakPoint"/> Rigved Vyas</p>
            </div>
        </div>
        <div className="col-lg-4 col-sm-3 col-12 d-flex align-items-center justify-content-center">
            <div>
                <p className={`m-0 footer-pad ${theme == "dark" ? style.footItemsDark : style.footItemsLight} footItem2`}>Copyright © 2025 Rigved Vyas</p>
            </div>
        </div>
        <div className="col-lg-4 col-sm-4 col-12 d-flex align-items-center justify-content-sm-end justify-content-center">
            <div className="d-flex gap-lg-4 gap-sm-2 gap-3 align-items-center pe-3 py-2 " >
                <div className={` footIcons ${theme == "dark" ? style.footIconsDark : style.footIconsLight} `}>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRrkzTfhvgMqjDrwppRgTgjGGNXWlSkxRjTMVhKSmQkHzjNSxxpbvpGvGnNndGtGrzFnpbG" className="" target="_blank">
                    <img src="./images/envelope-icon-3.png" alt="mail" className="img-fluid mail " style={{width:"25px",height:"25px"}}/>
                </a>
                </div>
                <div className={` footIcons ${theme == "dark" ? style.footIconsDark : style.footIconsLight} `}>
                    <a href="https://www.linkedin.com/in/rigved-vyas-1b478827b/" target="_blank">
                    <img src="./images/linkedin.png" alt="in" className="img-fluid linkedin " style={{width:"25px",height:"25px"}} />
                </a>
                </div>
                <div className={` footIcons ${theme == "dark" ? style.footIconsDark : style.footIconsLight} d-flex align-items-center justify-content-center`}>
                    <a href="https://github.com/rigvedvyas" target="_blank">
                        <img src="./images/github.png" alt="github" className="img-fluid  github "  style={{width:"25px",height:"25px"}} />
                    </a>
                </div>
                <div className={` footIcons ${theme == "dark" ? style.footIconsDark : style.footIconsLight}`}>
                    <a href="tel:919960499988">
                        <img src="./images/phone.png" alt="phone" className="img-fluid  phone " style={{width:"25px",height:"25px"}} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

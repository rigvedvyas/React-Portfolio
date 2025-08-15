import { useContext, useEffect, useRef } from "react";
import ThemeContextStore from "../store/theme-store";
import style from "../css_modules/home.module.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import {Link} from "react-router-dom";
import pdf from '../files/Rigved_Vyas_Resume.pdf'
import Typed from "typed.js";

const Home = () => {
  const { theme } = useContext(ThemeContextStore);
  const typedRef = useRef(null);

  useEffect(()=>{
       const options = {
    strings:["Full Stack Developer.","Front-End Developer."],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1500,
    loop:true,
  }
    const typed = new Typed(typedRef.current,options);

     return () => {
    typed.destroy(); 
  };
  },[])
 

  return (
    <div className="container">
      <div className="row justify-content-between upperRow">
        <div className="col-xl-5 col-lg-6 col-sm-6 col-12 d-flex justify-content-lg-center justify-content-sm-start justify-content-center mb-sm-0 mb-3 pe-sm-0">
          <div className="home-content-left" data-aos="fade-up-right" data-aos-duration="1500">
            <h1
              className={`${
                theme == "dark" ? style.homeContentDark : style.homeContentLight} mb-lg-5 mb-sm-5 mb-4`}>Hello<span className={`${theme == "dark" ? style.homeColoredContentDark : style.homeColoredContentLight} ps-1 `}>!</span>
            </h1>
            <h1 className={`${
                theme == "dark" ? style.homeContentDark : style.homeContentLight}`}>I'm <span className={`${theme == "dark" ? style.homeColoredContentDark : style.homeColoredContentLight}`}>Rigved Vyas</span>
            </h1>
            <h2 className={`${theme == "dark" ? style.homeColoredContentDark : style.homeColoredContentLight} mb-lg-5 mb-sm-5 mb-5`} >- <span ref={typedRef}></span> </h2 >
            <div className="d-flex">
                <button className={`py-lg-2 px-lg-5 py-sm-2 px-sm-4 py-md-2 px-md-3 py-2 px-4 contactBtn ${theme == "dark" ? style.homeContactBtnDark : style.homeContactBtnLight}`}> <Link to={"/contact"} style={{textDecoration:"none"}} className={`${theme == "dark" ? "text-light": "text-dark"}`}>Get In Touch</Link> </button>
            <button className={`ms-lg-4 py-lg-2 px-lg-5 px-sm-4 py-sm-2 ms-sm-4 py-2 px-3 ms-3 resumeBtn ${theme == "dark" ? style.homeBtnsDark : style.homeBtnsLight}`} >
                <div className={`d-flex justify-content-center align-items-center`}>
                    <IoDocumentTextOutline /><a href={pdf} download={"Resume.pdf"} target="_blank" style={{textDecoration:"none"}} className={`${theme == "dark" ? "text-light": "text-dark"}`}>Resume</a>
                </div>
            </button>
            </div>
            
          </div>
        </div>
        <div className="col-lg-5 col-sm-6 col-12">
            <div className="d-flex justify-content-center align-items-center mt-xl-3 mt-lg-4 mt-sm-5 mt-5" data-aos="fade-up-left" data-aos-duration="1500">
                <img src="./images/PassportSizePic.jpg" alt="pic" className={`img-fluid profilePic ${theme == "dark" ? style.homePicDark : style.homePicLight}`} />
            </div>
        </div>
      </div> 
      
      <div className="row mt-lg-5 ">
        <h1 className={`text-center mb-sm-5 mb-4 ${theme == "dark" ? style.homeframesContentDark : style.homeframesContentLight}`}>What I Do</h1>
          <div className="col-12 d-flex flex-column justify-content-center gap-4">
            <div className={`frames m-auto ${theme == "dark" ? style.homeframesBgDark : style.homeframesBgLight}`}>
                <div className="d-sm-flex align-items-center gap-3">
                 <div className="text-center mb-sm-0 mb-2">
                  <img src="./images/brush.png" alt="" style={{ width: "30px", height: "30px" }} /> 
                 </div>
                 <div className={`mb-0 whatIDo text-center ${theme == "dark" ? style.homeframesContentDark : style.homeframesContentLight} fs-5`}>
                     Creating elegant and responsive designs.
                 </div>
                </div>
            </div>
             <div className={`frames m-auto ${theme == "dark" ? style.homeframesBgDark : style.homeframesBgLight}`}>
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="text-center  mb-sm-0 mb-2">
                    <img src="./images/backend.png" alt="" style={{ width: "30px", height: "30px" }}/>
                  </div>
                  <div className={`mb-0 whatIDo text-center ${theme == "dark" ? style.homeframesContentDark : style.homeframesContentLight} fs-5`}>
                    Experienced in building end-to-end web applications.
                  </div>
                </div>
            </div>
             <div className={`frames m-auto ${theme == "dark" ? style.homeframesBgDark : style.homeframesBgLight}`}>
                <div className="d-sm-flex  align-items-center gap-3">
                 <div className="text-center  mb-sm-0 mb-2">
                  <img src="./images/search.png" alt="" style={{ width: "30px", height: "30px" }}/>
                 </div>
                 <div className={`mb-0 whatIDo text-center ${theme == "dark" ? style.homeframesContentDark : style.homeframesContentLight} fs-5`}>
                  Focused on clean code, performance, and scalability.
                 </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};


export default Home;

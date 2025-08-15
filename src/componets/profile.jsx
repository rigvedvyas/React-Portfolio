import skills from "../data/skills.json";
import projects from "../data/projects.json";
import education from "../data/education.json";
import certificates from "../data/certification.json";
import pdf from "../files/cdac-certificate.pdf";
import { useContext } from "react";
import ThemeContextStore from "../store/theme-store";
import style from "../css_modules/profile.module.css";

const Profile = () => {

  const {theme} = useContext(ThemeContextStore);

  const isDark = theme === "dark";


  return (
    <div className="container">
      {/* Intro */}
      <div className="row justify-content-between mt-lg-3">
        <div className="col-lg-7 col-sm-6 d-flex justify-content-xl-center justify-content-lg-end justify-content-sm-end justify-content-center align-items-center pe-md-2 pe-1 order-2 order-sm-1">
          <div className="profileIntroDiv" data-aos="fade-right" data-aos-duration="1500">
            <div className={`mb-4 profileIntro ${isDark ? style.profileContentDark: style.profileContentLight}`}>
              Full Name : Rigved Shrikant Vyas
            </div>
            <div className={`mb-4 profileIntro ${isDark ? style.profileContentDark: style.profileContentLight}`}>
              Location : Jalna, Maharashtra, India
            </div>
            <div className={`d-flex mb-4 ${isDark ? style.dark: style.light}`}>
              <div className="profileIntro">Status: </div>
              <span className={`ms-2 profileIntro`}>
                {" "}
                Actively seeking opportunities <br className="profileIntroLineBreak"/> to grow as a developer.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-6  d-flex justify-content-center px-md-2 px-1 pe-md-2 pe-sm-3 pe-1 order-1 order-sm-2">
          <div className="developerPic align-content-center mt-sm-0 mt-4" data-aos="fade-left" data-aos-duration="1500">
            <img src="./images/dev.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="row p-sm-2 p-lg-3 p-xxl-5 p-3  mt-xxl-0 mt-4 ">
        <div className="col-12 px-sm-3 px-0">
          <div>
            <h3 className={`${isDark ? style.dark: style.light} techSummary`}>Technical Summary</h3>
          </div>
          <div className={`profileGeneralFont ${isDark ? style.profileContentDark: style.profileContentLight} mt-3`}>
            Results-driven Full Stack Developer with expertise in Java, Spring
            Boot, React JS, and MySQL. Passionate about building scalable and
            secure Web applications. Strong problem-solving skills with hands-on
            experience in RESTful APIs, JWT authentication, and Database
            management. Seeking a challenging role to leverage my skills in
            software development.
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="row p-lg-3 p-xxl-5 p-sm-2 p-3 mt-4 mt-xxl-0 justify-content-center">
        <h3 className={`${isDark ? style.dark: style.light} techSkills px-sm-3 px-0`}>Technical Skills</h3>
        <div className="skillContainer gap-5 d-flex flex-wrap mt-5 justify-content-center px-sm-2 px-0" data-aos="fade-up" data-aos-duration="1000">
          {skills.map((data) => (
            <div className={`skillBox d-flex flex-column justify-content-center align-items-center`} key={data.id}>
              <div className="mb-3">
                <img src={data.imgSrc} alt="" className="skillIcon" />
              </div>
              <div className={`skillName ${isDark ? style.profileContentDark : style.profileContentLight}`}>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Education */}
      <div className="row p-3 p-xxl-5 p-lg-3 p-sm-2 mt-4 mt-xxl-0">
        <h3 className={`${isDark ? style.dark: style.light} px-sm-3 px-0 educationHeadline`}>Education</h3>
        <div className="col-12 d-flex justify-content-lg-center justify-content-start justify-content-sm-center mt-md-5 mt-4 px-sm-3 px-0">
          <div className="eduContainer d-flex flex-wrap gap-4">
            {education.map((e) => (
              <div className={`eduBox p-lg-3 p-sm-3 p-2 ${isDark ? style.eduBoxBorderDark : style.eduBoxBorderLight}`} key={e.id}>
                <div className="d-flex gap-2 align-items-center ">
                  <img
                    src={e.logo}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  />
                  <div style={{ lineHeight: "20px" }}>
                    <p className={`mb-1 institute ${isDark ? style.profileContentDark : style.profileContentLight}`}>{e.instituteName}</p>
                    <p className="mb-0 text-secondary degree">{e.degree}</p>
                    <p className="mb-0 text-secondary duration">{e.duration}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="mb-2 text-secondary grade">{e.grade}</p>
                  <p className={`mb-2 description ${isDark ? style.profileContentDark : style.profileContentLight}`}>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="row p-3 p-xxl-5 p-lg-3 p-sm-2 mt-4 mt-xxl-0">
        <h3 className={`${isDark ? style.dark: style.light} px-sm-3 px-0 projectHeadline`}>Projects</h3>
        <div className="col-12 mt-4 mt-md-5 px-sm-3 px-0" >
          <div className="projectContainer  d-flex flex-wrap gap-4 justify-content-center" >
            {projects.map((project) => (
              <div className={`d-flex flex-column justify-content-center ${isDark ? style.projectBoxDark : style.projectBoxLight} projectBox ${isDark ? style.profileContentDark : style.profileContentLight}`} data-aos="zoom-in" data-aos-duration="1000" key={project.id}>
                <div className="m-auto projectInnerBox">
                    {/* carousel */}
                    <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                      
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={project.imgSrc1} className="d-block w-100" alt="img1" />
                    </div>
                    <div className="carousel-item">
                      <img src={project.imgSrc2} className="d-block w-100" alt="img2" />
                    </div>
                    <div className="carousel-item">
                      <img src={project.imgSrc3} className="d-block w-100" alt="img3" />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next "
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                    
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-1 mt-2 projectSkillsDiv" >
                    {project.skills.map((skill,index)=>(
                        <div style={{borderRadius:"10px",padding:"0px 10px"}} className={`projSkills ${isDark ? style.skillsDark : style.skillsLight}`} key={index}>{skill}
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="mb-0 mt-2 projectName">{project.projectName}</h3>
                </div>
                <div className="mb-3 text-secondary projectDuration">
                    {project.duration}
                </div>
                <div className="projDescription mb-4 projDescription">
                    {project.description}
                </div>
                <div className="d-flex mb-3">
                  <a href="https://github.com/Tours-and-Travel-Management/TTM" target="_blank">
                    <button className="viewCodeBtn btn btn-secondary mb-3 p-2">View Code</button>
                  </a>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Certificates */}
      <div className="row justify-content-between p-3 p-xxl-5 p-lg-3 p-sm-2 mt-4 mt-xxl-0">
        <h3 className={`${isDark ? style.dark: style.light}  px-sm-3 px-0 certificateHeadline`}>Certifications</h3>
            <div className="col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-md-5 mb-lg-0 mb-5" >
              <div className="certificateMsgDiv">
                <div className={`d-flex gap-3 justify-content-lg-start justify-content-center ${isDark ? style.dark: style.light}`}>
                <h4 style={{fontFamily:"cursive"}}>Check </h4>
                <h4 style={{fontFamily:"cursive"}}>Out</h4>
                </div>
                <div className={`${isDark ? style.profileContentDark: style.profileContentLight} d-flex justify-content-lg-start justify-content-center`}> 
                 <h3>MY CERTIFICATE</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex flex-wrap gap-5 justify-content-lg-end justify-content-center mt-md-5">
              {certificates.map((certificate)=>(
              <div className="" key={certificate.id}>
                <div className="imgDiv certficateBox d-flex justify-content-center">
                  <a href={pdf} target="_blank">
                  <img src={certificate.imgSrc} alt="" className="certificateImg"/>
                </a>
                </div>
                <div className="mt-3 text-center certificateinfo">
                <h5 className={`${isDark ? style.profileContentDark: style.profileContentLight}`}>{certificate.certificateName}</h5>
                <h5 className={`${isDark ? style.dark: style.light}`}>{certificate.provider}</h5>
                </div>
              </div>
              ))}
              
            </div>
      </div>
    </div>
  );
};

export default Profile;

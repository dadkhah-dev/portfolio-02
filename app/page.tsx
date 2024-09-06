import Image from "next/image";
import "./style.css";
import Script from "next/script";
import Link from "next/link";
import "@/public/fonts/fonts.googleapis.com/icon.css";
import "@/public/css/materialize.css";
import "@/public/css/layout.css";
import "@/public/css/magnific-popup.css";
import "@/public/css/animate.css";
import "@/public/css/ionicons.css";
import * as info from "@/constants/index";
import { chunkArray, uniqueArray } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata() {
  return {
    title: "",
    description: "Full Stack Developer",
    icons: {
      icon: "/images/favicons/favicon.ico",
      shortcut: "/images/favicons/favicon.ico",
      apple: "/images/favicons/favicon.ico",
    },
  };
}

export default function Home() {
  return (
    <>
      {/* Basic */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content="responsive, resume, jquery, css3, bootstrap, Material CV, portfolio"
      />
      {/* Mobile Specific Metas */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      {/* Page */}
      <div className="page" id="home-section">
        {/* Preloader */}
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="preloader-wrapper spinner big active">
                <div className="spinner-layer spinner-blue">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
                <div className="spinner-layer spinner-red">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
                <div className="spinner-layer spinner-green">
                  <div className="circle-clipper left">
                    <div className="circle" />
                  </div>
                  <div className="gap-patch">
                    <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
        <header>
          {/* SideNav */}
          <ul className="side-nav fixed" id="nav-mobile">
            <li className="curent">
              <div className="userView">
                <div className="background">
                  <img src="images/slide-bg.jpg" alt="" />
                </div>
                <img className="avatar circle" src="images/man.png" alt="" />
                <div className="white-text name">{info.profile.Name}</div>
                <div className="white-text email">{info.profile.Email}</div>
                <div className="social">
                  <a href={info.profile.FaceBook} target="blank">
                    <i className="ion ion-social-facebook" />
                  </a>
                  <a href={info.profile.Dribbble} target="blank">
                    <i className="ion ion-social-dribbble" />
                  </a>
                  <a href={info.profile.Twitter} target="blank">
                    <i className="ion ion-social-twitter" />
                  </a>
                  <a href={info.profile.GooglePlus} target="blank">
                    <i className="ion ion-social-googleplus" />
                  </a>
                </div>
              </div>
            </li>
            <li className="active">
              <a href="#started-section" className="waves-effect waves-light">
                <i className="material-icons">home</i>Home
              </a>
            </li>
            <li>
              <a href="#about-section" className="waves-effect waves-light">
                <i className="material-icons">person_pin</i>About
              </a>
            </li>
            <li>
              <a
                href="#experience-section"
                className="waves-effect waves-light"
              >
                <i className="material-icons">assignment</i>Resume
              </a>
            </li>
            <li>
              <a href="#service-section" className="waves-effect waves-light">
                <i className="material-icons">settings</i>Services
              </a>
            </li>
            <li>
              <a href="#works-section" className=" waves-effect waves-light">
                <i className="material-icons">work</i>Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing-section" className="waves-effect waves-light">
                <i className="material-icons">view_carousel</i>Pricing
              </a>
            </li>
            <li>
              <a href="#blog-section" className="waves-effect waves-light">
                <i className="material-icons">library_books</i>Blog
              </a>
            </li>
            <li>
              <a href="#contact-section" className="waves-effect waves-light">
                <i className="material-icons">phone</i>Contact
              </a>
            </li>
          </ul>
          {/* Top menu */}
          <nav className="top-menu">
            <div className="nav-wrapper">
              <ul>
                <li>
                  <a href="#" data-activates="nav-mobile" className="menu-btn">
                    <i className="material-icons">menu</i>
                  </a>
                </li>
                {/*<li class="right">
							<a href="#"><i class="material-icons">arrow_back</i></a>
						</li>*/}
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {/* Container */}
          <div className="container scrollspy" id="started-section">
            {/* Section About */}
            <div className="section started">
              {/* Profile */}
              <div className="card profile">
                <div
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(" + info.profile.ProfileBackground + ")",
                  }}
                />
                <div className="card-content">
                  <div className="row">
                    <div className="col s12 m5 l6">
                      <figure className="card-profile-image">
                        <img
                          className="circle z-depth-1 responsive-img"
                          src={info.profile.AvatarPath}
                          alt=""
                        />
                      </figure>
                      <div className="card-profile-desc">
                        <h4 className="card-title grey-text text-darken-4">
                          {info.profile.Name}
                        </h4>
                        <p className="medium-small grey-text">
                          {info.profile.Carrier}
                        </p>
                      </div>
                    </div>
                    <div className="col s4 m3 l2 center-align">
                      <h4 className="card-title grey-text text-darken-4">
                        {info.home.Jobs_Completed}
                      </h4>
                      <p className="medium-small grey-text">Jobs Completed</p>
                    </div>
                    <div className="col s4 m2 l2 center-align">
                      <h4 className="card-title grey-text text-darken-4">
                        {info.home.Years_Experience}
                      </h4>
                      <p className="medium-small grey-text">Years Experience</p>
                    </div>
                    <div className="col s4 m2 l2 center-align">
                      <h4 className="card-title grey-text text-darken-4">
                        {info.home.USD_hr}
                      </h4>
                      <p className="medium-small grey-text">USD/hr</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="stats">
                <div className="row">
                  <div className="col s12 m6 l3">
                    <div className="card green darken-2">
                      <div className="card-content white-text center-align">
                        <p className="card-title">
                          <i className="material-icons">recent_actors</i>{" "}
                          {info.home.Happy_Clients}
                        </p>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m6 l3">
                    <div className="card cyan darken-2">
                      <div className="card-content white-text center-align">
                        <p className="card-title">
                          <i className="material-icons">done_all</i>{" "}
                          {info.home.Complated_Projects}
                        </p>
                        <p>Complated Projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m6 l3">
                    <div className="card red darken-2">
                      <div className="card-content white-text center-align">
                        <p className="card-title">
                          <i className="material-icons">code</i>{" "}
                          {info.home.Lines_Of_Code}
                        </p>
                        <p>Lines of code</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m6 l3">
                    <div className="card amber darken-2">
                      <div className="card-content white-text center-align">
                        <p className="card-title">
                          <i className="material-icons">supervisor_account</i>{" "}
                          {info.home.Followers}
                        </p>
                        <p>Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section About */}
            <div className="section about scrollspy" id="about-section">
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">
                    About Me
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="card-panel">
                    <div className="text-box">
                      {info.home.About_Me.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                    <div className="bts">
                      <Link
                        href={info.home.Download_CV_Url}
                        className="btn waves-effect waves-light"
                        target="_blank"
                      >
                        Download CV
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m12 l6">
                  <ul className="collection collection-info z-depth-1">
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s6 m5 l5 grey-text darken-1">
                          <i className="material-icons">perm_identity</i> Age:
                        </div>
                        <div className="col s6 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Age} Years
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s6 m5 l5 grey-text darken-1">
                          <i className="material-icons">work</i> Job:
                        </div>
                        <div className="col s6 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Job}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s6 m5 l5 grey-text darken-1">
                          <i className="material-icons">location_on</i>{" "}
                          Citizenship:
                        </div>
                        <div className="col s6 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Citizenship}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s6 m5 l5 grey-text darken-1">
                          <i className="material-icons">business</i> Address:
                        </div>
                        <div className="col s6 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Address}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col s12 m12 l6">
                  <ul className="collection collection-info z-depth-1">
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s8 m5 l5 grey-text darken-1">
                          <i className="material-icons">invert_colors</i> Cups
                          of coffee:
                        </div>
                        <div className="col s4 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Cups_of_coffee}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s8 m5 l5 grey-text darken-1">
                          <i className="material-icons">language</i> Countries
                          Visited:
                        </div>
                        <div className="col s4 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Countries_Visited}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s8 m5 l5 grey-text darken-1">
                          <i className="material-icons">stars</i> Awards Won:
                        </div>
                        <div className="col s4 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Awards_Won}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s8 m5 l5 grey-text darken-1">
                          <i className="material-icons">album</i> Albumes
                          Listened:
                        </div>
                        <div className="col s4 m7 l7 grey-text text-darken-4 right-align">
                          {info.aboutMe.Albumes_Listened}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col s12 m12 l6">
                  <ul className="collection collection-skills z-depth-1">
                    <li className="collection-item avatar">
                      <i className="material-icons circle green darken-2">
                        person
                      </i>
                      <div className="title">Professional Skills</div>
                      <p>Sed ut perspiciatis</p>
                    </li>
                    {info.aboutMe.Professional_Skills.map((item, index) => (
                      <li key={index} className="collection-item">
                        <div className="row">
                          <div className="col s6 m4 l4">
                            <div className="title">{item.Title}</div>
                          </div>
                          <div className="col s6 m8 l8">
                            <div className="progress green lighten-5">
                              <div
                                className="determinate green darken-2"
                                style={{ width: item.Progress }}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col s12 m12 l6">
                  <ul className="collection collection-skills z-depth-1">
                    <li className="collection-item avatar">
                      <i className="material-icons circle red darken-2">
                        forum
                      </i>
                      <div className="title">Personal Skills</div>
                      <p>Sed ut perspiciatis</p>
                    </li>
                    {info.aboutMe.Personal_Skills.map((item, index) => (
                      <li key={index} className="collection-item">
                        <div className="row">
                          <div className="col s6 m4 l4">
                            <div className="title">{item.Title}</div>
                          </div>
                          <div className="col s6 m8 l8">
                            <div className="progress red lighten-5">
                              <div
                                className="determinate red darken-2"
                                style={{ width: item.Progress }}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Section Resume */}
            <div
              className="section experience scrollspy"
              id="experience-section"
            >
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">
                    Experience &amp; Education
                  </h5>
                </div>
              </div>
              {/* Resume Items */}
              {chunkArray(info.experience, 2).map((row, index1) => (
                <div key={index1} className="row">
                  {row.map((item: any, index2) => (
                    <div key={index2} className="col s12 m12 l6">
                      <ul className="collection collection-resume z-depth-1">
                        <li className="collection-item avatar">
                          <i className="material-icons circle green darken-2">
                            assignment
                          </i>
                          <span className="ultra-small red-text darken-2 right">
                            {item?.Duration}
                          </span>
                          <div className="title">{item?.Company}</div>
                          <span className="tag red darken-2">{item?.Job}</span>
                        </li>
                        <li className="collection-item">
                          <p>{item?.Description}</p>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
              {chunkArray(info.education, 2).map((row, index1) => (
                <div key={index1} className="row">
                  {row.map((item: any, index2) => (
                    <div key={index2} className="col s12 m12 l6">
                      <ul className="collection collection-resume z-depth-1">
                        <li className="collection-item avatar">
                          <i className="material-icons circle red darken-2">
                            school
                          </i>
                          <span className="ultra-small red-text darken-2 right">
                            {item?.Duration}
                          </span>
                          <div className="title">{item?.Course}</div>
                          <span className="tag red darken-2">
                            {item?.Location}
                          </span>
                        </li>
                        <li className="collection-item">
                          <p>{item?.Description}</p>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Service */}
            <div className="section service scrollspy" id="service-section">
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="left-align">Services</h5>
                </div>
              </div>
              {chunkArray(info.services, 2).map((row, index1) => (
                <div key={index1} className="row">
                  {row.map((item: any, index2) => (
                    <div key={index2} className="col s12 m12 l6">
                      <div className="card horizontal">
                        <div className={"card-image darken-2 " + item?.Color}>
                          <i className="material-icons circle darken-2">
                            {item?.Icon}
                          </i>
                        </div>
                        <div className="card-stacked">
                          <div className="card-content">
                            <div className="title">{item?.Title}</div>
                          </div>
                          <div className="card-action">
                            <p>{item?.Description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Portfolio */}
            <div className="section works scrollspy" id="works-section">
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">
                    Portfolio
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  <ul className="tabs filter z-depth-1">
                    <li className="tab">
                      <a className="active" data-filter=".all">
                        All
                      </a>
                    </li>
                    {uniqueArray(info.portfolio.map((item) => item.Type)).map(
                      (type, index) => (
                        <li key={index} className="tab">
                          <a data-filter={"." + type.replaceAll(" ", "")}>
                            {type}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="row">
                {info.portfolio.map((item, index) => (
                  <div key={index} className="col s12 m6 l4">
                    <div
                      className={
                        "card work-item all " + item.Type.replaceAll(" ", "")
                      }
                    >
                      <div className="card-image waves-effect waves-block waves-light">
                        <a href={"#popup-" + index} className="activator">
                          <img src={item.ImageDir} alt="" />
                        </a>
                      </div>
                      <div className="card-content">
                        <h3 className="card-title grey-text text-darken-4">
                          <a href={"#popup-" + index} className="activator">
                            <span>{item.Title}</span>
                            <i className="material-icons right">more_vert</i>
                          </a>
                        </h3>
                        <span className="category blue-text text-darken-2">
                          {item.Type}
                        </span>
                      </div>
                      <div
                        id={"popup-" + index}
                        className="popup-box mfp-fade mfp-hide"
                      >
                        <div className="content">
                          <div className="image">
                            <img src="images/works/work1.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="category">{item.Type}</div>
                            <h4>{item.Title}</h4>
                            <p>{item.Description}</p>
                            <a
                              href={item.ProjectLink}
                              target="_blank"
                              className="btn waves-effect waves-light"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Section Pricing */}
            <div className="section pricing scrollspy" id="pricing-section">
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">
                    Pricing
                  </h5>
                </div>
              </div>
              <div className="row">
                {info.pricing.map((item, index1) => (
                  <div key={index1} className="col s12 m6 l3">
                    <div className="card-panel">
                      <div className="pricing-table">
                        <div className="pt-title">{item.Plan}</div>
                        <div className="pt-amount">
                          <span className="dollar">$</span>
                          <span className="amount">{item.Rate}</span>
                          <span className="period">/hr</span>
                        </div>
                        <div className="pt-feature-list">
                          <ul>
                            {item.Services.map((service, index2) => (
                              <li key={index2}>
                                {service}
                                {index2 % 3 === 2 && (
                                  <span className="new badge red" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={item.Link}
                          target="_blank"
                          className="btn waves-effect waves-light"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Blog */}
            <div className="section blog scrollspy" id="blog-section">
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">Blog</h5>
                </div>
              </div>
              <div className="row">
                {info.blog.map((item, index1) => (
                  <div key={index1} className="col s12 m12 l4">
                    <div className="card">
                      <div className="card-image">
                        <img src={item.Image} alt="" />
                        <a
                          href={item.Link}
                          target="_blank"
                          className="btn-floating btn-large halfway-fab waves-effect waves-light"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                      </div>
                      <div className="card-content">
                        <span className="card-title">{item.Title}</span>
                        <p>{item.Description}</p>
                      </div>
                      <div className="card-action">
                        <div className="badges">
                          {item.Tag.map((tag, index2) => (
                            <span
                              key={index2}
                              className="new badge red"
                              data-badge-caption=""
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="date">{item.Published}</div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="center-align">
                {/* <a href="blog.html" className="btn waves-effect waves-light">
                  View Blog
                </a> */}
              </div>
            </div>
            {/* Section Contacts */}
            <div
              className="section contacts scrollspy last"
              id="contact-section"
            >
              {/* Title */}
              <div className="row">
                <div className="col s12 m12 l12">
                  <h5 className="grey-text text-darken-2 left-align">
                    Contact Me
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l6">
                  <ul className="collection collection-info z-depth-1">
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s5 grey-text darken-1">
                          <i className="material-icons">business</i> Address:
                        </div>
                        <div className="col s7 grey-text text-darken-4 right-align">
                          {info.contactMe.Address}
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s5 grey-text darken-1">
                          <i className="material-icons">local_phone</i> Phone:
                        </div>
                        <div className="col s7 grey-text text-darken-4 right-align">
                          <a href="tel:12562548456">{info.contactMe.Phone}</a>
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s5 grey-text darken-1">
                          <i className="material-icons">email</i> E-mail:
                        </div>
                        <div className="col s7 grey-text text-darken-4 right-align">
                          <a href="mailto:smorgan@domain.com">
                            {info.contactMe.Email}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="col s5 grey-text darken-1">
                          <span style={{ display: "inline-block" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                              />
                            </svg>
                          </span>{" "}
                          LinkdedIn:
                        </div>
                        <div className="col s7 grey-text text-darken-4 right-align">
                          <a href="mailto:smorgan@domain.com">
                            {info.contactMe.Linkedin}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="collection-item">
                      <div className="row">
                        <div className="map" id="map" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col s12 m12 l6">
                  <div className="card-panel">
                    <div className="contact-form">
                      <ContactForm />
                      <div className="alert-success">
                        <p>
                          Thanks, your message is sent successfully. We will
                          contact you shortly!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer></footer>
        </main>
      </div>
      <Script src="js/jquery.min.js" />
      <Script src="js/materialize.js" />
      <Script src="js/jquery.validate.js" />
      <Script src="js/magnific-popup.js" />

      {/* <!-- Google map api --> */}
      <Script
        type="text/javascript"
        src="js/map/maps.google.com/maps/api/js.js"
      />

      {/* <!-- Main Scripts --> */}
      <Script src="js/main.js" />
    </>
  );
}

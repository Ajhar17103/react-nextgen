import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";


const content = [
  {
    title: "NEXTGEN INNOVATION",
    description:
      "NEXTGEN Innovation Ltd. is an organization that distinguishes and advances people who are inspired, live with veracity, and share our core mission of working for the good of others.",
    button: "Read More",
    image: "https://2aszhi3llh0x466uws21w6cc-wpengine.netdna-ssl.com/wp-content/uploads/insurance-software-development.jpg.webp",
    user: "Serving Innovation",
    userProfile: "/images/logo.png"
  },
  {
    title: "Hospital  Management Software",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "http://www.nextgenitltd.com/images/slides/1.jpg",
    user: "Serving Innovation",
    userProfile: "/images/logo.png"
  },
  {
    title: "TELEMEDICINE SOLUTION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Get in Touch",
    image: "http://www.nextgenitltd.com/images/Telemedicine-Solution.jpg",
    user: "Serving Innovation",
    userProfile: "/images/logo.png"
  },
  {
    title: "BUSINESS ERP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Get in Touch",
    image: "https://amphitea.com/wp-content/uploads/2019/03/iStock-524716102.jpg",
    user: "Serving Innovation",
    userProfile: "/images/logo.png"
  },
  {
    title: "CRM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Get in Touch",
    image: "https://www.massapequaobserver.com/wp-content/uploads/2020/08/ColDiSclafani_073120.Handshake_Image.Web_.jpg",
    user: "Serving Innovation",
    userProfile: "/images/logo.png"
  },
 
];

const Sliders = () => (
  <div>
  
    
    <Slider className="slider_wrapper" >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider_content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
               <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default Sliders

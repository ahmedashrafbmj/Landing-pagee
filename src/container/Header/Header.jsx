import React, { useRef } from "react";
import { SubHeading } from "../../components";
import "./Header.css";
import video from "../../assets/Venice_5.mp4";
import { RiTaskLine } from "react-icons/ri";
import { BsClipboardCheck } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';

const Header = () => {
  const vidRef = useRef();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">One app to replace them all.</h1>
        <SubHeading title="All your work in one place:" />
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // background: "red",
            width: "70%",
            color:"white"
          }}
        >
          <div >
            <div>
            <RiTaskLine color="#dcca87" className="my-icon"/>
            <span>Task</span>

            </div>
          </div>
          <div >
            <div>
            <BsClipboardCheck color="#dcca87" className="my-icon"/>
            <span>WhiteBoard</span>

            </div>
          </div>
          <div >
            <div>
            <MdOutlineDashboard color="#dcca87" className="my-icon"/>
            <span>Dashboard</span>

            </div>
          </div>
      
        </div>



          <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // background: "red",
            width: "60%",
            color:"white",
            marginTop:"30px"
          }}
        >
          <div >
            <div>
            <RiTaskLine color="#dcca87" className="my-icon"/>
            <span>Chat</span>

            </div>
          </div>
          <div >
            <div>
            <BsClipboardCheck color="#dcca87" className="my-icon"/>
            <span>Goals</span>

            </div>
          </div>
          <div >
            <div>
            <MdOutlineDashboard color="#dcca87" className="my-icon"/>
            <span>Docs</span>

            </div>
          </div>
      
        </div>
      </div>

      <div className="app__wrapper_img">
        {/* <img src={images.welcome} alt="header_img" /> */}
        <video
          ref={vidRef}
          src={
            "https://videos.ctfassets.net/w8fc6tgspyjz/3Wrtk4wjYnPVgyGo2W2jMu/649d7a46771615f217afad085d747b0f/header-graphic-v08-vp9.webm"
          }
          // src={video}

          type="video/mp4"
          loop
          controls={true}
          muted
          style={{ width: "120%" }}
        />
      </div>
    </div>
  );
};
export default Header;

import "./side-bar.css";

import { GrProjects } from "react-icons/gr";
import { RiSuitcaseFill } from "react-icons/ri";
import { GiCheckedShield } from "react-icons/gi";
const Sidebar = () => {
  return (
    <aside className="side-bar">
      <div className="menu">
        <div className="menu-icon">
          {" "}
          <GrProjects />{" "}
        </div>

        <div className="menu-text"> Projects</div>
      </div>

      <div className="menu">
        <div className="menu-icon">
          {" "}
          <RiSuitcaseFill />{" "}
        </div>

        <div className="menu-text"> Classrooms</div>
      </div>

      <div className="red menu ">
        <div className="red-selector"> </div>
        <div className="red menu-icon">
          {" "}
          <GiCheckedShield />{" "}
        </div>

        <div className="red menu-text"> Permissions</div>
      </div>
    </aside>
  );
};

export { Sidebar };

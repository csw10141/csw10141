import styles from "styled-components";
import { Link } from "react-router-dom";
import styled from "./layout.module.css";

export const PathName = styles.p`
  .active {
    color: #ff0000;
  }
`;

function AdminNav() {
    return ( 
      <div className={styled.main_top}>
        <div className={styled.top_logo} >
            <Link to="/admin"><img src="https://www.bulnande.kr/assets/logo_redwhite.png" alt="logo" /></Link>
        </div>
        {/* <div className={styled.cleanDiv}></div> */}
        <div className={styled.top_menu}>
            <ul>
              <li><Link to="/admin/about">About</Link></li>
              <li><Link to="/admin/team">Team</Link></li>
              <li><Link to="/admin/project">Project</Link></li>
              <li><Link to="/admin/contact">Contact</Link></li>
            </ul>
        </div>
      </div>
    )
};

export default AdminNav;
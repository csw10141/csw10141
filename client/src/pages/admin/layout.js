import styles from "styled-components";
import { Link } from "react-router-dom";
import styled from "./layout.module.css";

const PathName = styles.p`
  .navPath {
  }
  .top_menu .active {
    color:#ee292f;
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
              <li><Link to="/admin/about"><PathName>About</PathName></Link></li>
              <li><Link to="/admin/team">Team</Link></li>
              <li>
                <Link to="/admin/project"
                  className={
                    window.location.pathname.indexOf("/project") !== -1
                      ? "active"
                      : ""
                  }
                >
                  Project
                </Link>
              </li>
              <li><Link to="/admin/contact">Contact</Link></li>
            </ul>
        </div>
      </div>
    )
};

export default AdminNav;
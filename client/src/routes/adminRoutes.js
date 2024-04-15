import { Route, Routes } from "react-router-dom";
import Adminmain from "../pages/admin/main";
import AdminProject from "../pages/admin/project";
import ProjectInsert from "../components/admin/projectInsert";
import AdminProjectDetail from "../components/admin/adminProjectDetail";

function Adminroutes(){
    return (
        <Routes>
            <Route path="/" element={<Adminmain />} />
            <Route path="/about" element={<Adminmain />} />
            <Route path="/team" element={<Adminmain />} />
            <Route path="/project" element={<AdminProject />} />
            <Route path="/insert" element={<ProjectInsert />} />
            <Route path="/project/view:id" element={<AdminProjectDetail />} />
            <Route path="/project/insert/" element={<ProjectInsert />} />
            <Route path="/contact" element={<Adminmain />} />
        </Routes>
    );
}

export default Adminroutes;
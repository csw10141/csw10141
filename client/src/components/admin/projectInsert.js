import React from "react";
import AdminNav from "../../pages/admin/layout";
import styled from "./project.module.css";

function ProjectInsert(){
    return (
        <>
            <AdminNav />
            <div className={styled.insertDiv}>
                <div className={styled.mainWarp}>
                    Inster Page
                </div>
            </div>
        </>
    );
}

export default ProjectInsert;
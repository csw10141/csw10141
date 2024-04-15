import AdminNav from "./layout";
import AdminProjectlist from "../../components/admin/adminProjectlist";
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminProject(){
    return (
        <>
            <AdminNav />
            <AdminProjectlist />
        </>
    );
}

export default AdminProject;
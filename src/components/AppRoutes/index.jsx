import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/index.jsx";
import ScrollDemo from "../../pages/ScrollDemo/index.jsx";
import ModalDemo from "../../pages/ModalDemo/index.jsx";
import Profile from "../../pages/Profile/index.jsx";
import DefaultLayout from "../../layouts/DefaultLayout/index.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modal-demo" element={<ModalDemo />} />
                <Route path="/scroll-demo" element={<ScrollDemo />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;
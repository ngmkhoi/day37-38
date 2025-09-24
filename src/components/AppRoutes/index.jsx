import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/index.jsx";
import ScrollDemo from "../../pages/ScrollDemo/index.jsx";
import ModalDemo from "../../pages/ModalDemo/index.jsx";
import Profile from "../../pages/Profile/index.jsx";
import DefaultLayout from "../../layouts/DefaultLayout/index.jsx";
import {PerformanceDemo} from "../../pages/PerformanceDemo/index.jsx";
import FocusDemo from "../../pages/FocusDemo/index.jsx";
import HOCDemo from "../../pages/HOCDemo/index.jsx";
import RenderPropsDemo from "../../pages/RenderPropsDemo/index.jsx";
import CustomHooksDemo from "../../pages/CustomHooksDemo/index.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modal-demo" element={<ModalDemo />} />
                <Route path="/scroll-demo" element={<ScrollDemo />} />
                <Route path="/performance-demo" element={<PerformanceDemo />} />
                <Route path="/focus-demo" element={<FocusDemo />} />
                <Route path="/hoc-demo" element={<HOCDemo />} />
                <Route path="/render-props-demo" element={<RenderPropsDemo />} />
                <Route path="/customhooks-demo" element={<CustomHooksDemo />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;
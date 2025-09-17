import AppLogo from "./layouts/DefaultLayout/components/AppLogo"
import {HashRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes/index.jsx";

function App() {
  return (
    <HashRouter>
        <AppRoutes />
    </HashRouter>
  )
}

export default App

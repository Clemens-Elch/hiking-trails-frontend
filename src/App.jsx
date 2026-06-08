import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Trails from "./components/Trails.jsx";
import Comments from "./components/Comments.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="trails" element={<Trails />}/>
                    <Route path="comments" element={<Comments />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;

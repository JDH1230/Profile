import { Route, Routes } from "react-router-dom";
import Home from '../pages/home.js';
import Drama from '../pages/drama.js';
function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/> }></Route>
                <Route path="/drama" element={<Drama/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;
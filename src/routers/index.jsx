import React, { useLocation, useEffect } from "react";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from "../layout/Base/Base";
// .................Pages............................
import Homepage from "../pages/Homepage/Homepage";
// .................Pages............................End

function MyRoutes() {

    return (
        <BrowserRouter>

            <Base>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                </Routes>

            </Base>
        </BrowserRouter>
    )
}

export default MyRoutes;


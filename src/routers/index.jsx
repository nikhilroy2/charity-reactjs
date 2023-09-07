import React, { useLocation, useEffect } from "react";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from "../layout/Base/Base";
// .................Pages............................
import Homepage from "../pages/Homepage/Homepage";
import OurRoleAndImpact from "../pages/OurRoleAndImpact/OurRoleAndImpact";
// .................Pages............................End

function MyRoutes() {

    return (
        <BrowserRouter>

            <Base>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/our-role-impact" element={<OurRoleAndImpact/>}></Route>
                </Routes>

            </Base>
        </BrowserRouter>
    )
}

export default MyRoutes;


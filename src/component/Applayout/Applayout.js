import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Box } from "@material-ui/core";
import Routing from "../Routes";
import Header from '../header/Header'

function AppLayout() {

  useEffect(() => {
  }, [])

  return (
            <BrowserRouter>
              <Header />
              <Routing />
            </BrowserRouter>
  )
}

export default AppLayout;
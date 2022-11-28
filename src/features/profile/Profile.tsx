import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBarComponent from "../../components/nav/NavBarComponent";
import DrawerComponent from "../../components/nav/DrawerComponent";
import DrawerHeader from "../../components/nav/DrawerHeader";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import About from "./components/About";
import Skills from "./components/Skills";
import Connect from "./components/connect/Connect";
import Projects from "./components/Projects";
import { connect, experiences, skills, projects, about } from "../../data/config";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectTheme } from "../../features/profile/profileSlice";
import { useEffect } from "react";
import "./styles/profile.css";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function Profile() {
  const theme = useAppSelector(selectTheme);

  return (
    <Box sx={{ display: "flex" }} id="main" className={theme}>
      <CssBaseline />
      <NavBarComponent />
      <DrawerComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} id="container">
        <DrawerHeader />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/experiences"
            element={<Experiences details={experiences} />}
          />
          <Route path="/skills" element={<Skills details={skills} />} />
          <Route path="/connect" element={<Connect details={connect} />} />
          <Route path="/about" element={<About details={about} />} />
          <Route path="/projects" element={<Projects details={projects} />} />
        </Routes>
      </Box>
    </Box>
  );
}

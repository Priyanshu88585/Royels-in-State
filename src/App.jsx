import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import PageTransition from "./components/ui/PageTransition";
import SmoothScroll from "./components/ui/SmoothScroll";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <CursorGlow />
        <ScrollProgress />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="listings"
              element={
                <PageTransition>
                  <Listings />
                </PageTransition>
              }
            />
            <Route
              path="about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Route>
        </Routes>
      </SmoothScroll>
    </Router>
  );
}
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomepageRender from "./components/HomepageRender";
import ContactFormPage from "./components/ContactPageRender/ContactFormPage";
import AgentProfile from "./components/Agents/AgentProfile";
import PropertyOfTheDay from "./components/Properties/PropertyOfTheDay";
import Properties from "./components/Properties/Properties";
import ViewProperties from "./components/Properties/ViewProperties";
import NewsPage from "./components/News/News"; 

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomepageRender />} />
          <Route path="/Moore2.0" element={<HomepageRender />} />
          <Route path="/property/:id" element={<PropertyOfTheDay />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<ViewProperties />} />
          <Route path="/agent/:name" element={<AgentProfile />} />
          <Route path="/contact" element={<ContactFormPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

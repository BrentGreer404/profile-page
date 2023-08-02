import React from 'react';
import { Header } from './Header';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { skills, bio } from './data/bio';
import { projects } from './data/projects';
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Routes>
        <Route path="/" exact element={<LandingPage skills={skills} bio={bio}/>} />
        {/* <Route path="/aboutme" element={<AboutMePage/>} /> */}
        <Route path="/projects" element={<ProjectsPage projects={projects}/>}/>
      </Routes>
    </div>
  );
}

export default App;

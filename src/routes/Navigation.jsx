import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Teams from '../pages/Teams';
import Project from '../pages/Project';
import SubTeamsPage from '../pages/Subteams';
import '../styles/home.css';
import Footer from '../components/Footer';
const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />} />
        <Route path="projects" element={<Project />} />
        <Route path="subteams" element={<SubTeamsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;

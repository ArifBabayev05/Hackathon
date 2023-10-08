import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/contact/contact";
import Event from "./pages/Events/event";
import Map from "./pages/Map/map";
import Post from "./pages/Post/post";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import AppLayout from "./layouts/AppLayout";
import EventDetails from './pages/EventDetails/eventDetails'
import toast, { Toaster } from 'react-hot-toast';

import "./App.css"
import Profile from "./pages/Profile/profile";
import Donate from "./pages/donate/Donate";
function App() {
  
  return (
    <div className="App">
      <Toaster/>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Event />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/map" element={<Map />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;

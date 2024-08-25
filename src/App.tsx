
import { Route, Routes } from "react-router-dom";
import MainDesktop from "./pages/mainDesktop";
import Page from "./pages/page";
import Navbar from "./component/Navbar";
import Foter from "./component/Foter";
import Dubai from "./pages/Dubai";
import Build from "./pages/Build";
import States from "./pages/States";
import Sotuv from "./pages/Sotuv";
import Nowstroy from "./pages/Nowstroy";
import State_id from "./pages/State_id";
import Comments from "./pages/Comment";
import Galery from "./pages/Galery";
import Ocompany from "./pages/Ocompany";
import Boglanish from "./pages/Boglanish";





export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainDesktop />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/post" element={<Page />} />
        <Route path="/build" element={<Build />} />
        <Route path="/stat" element={<States />} />
        <Route path="/sotuv" element={<Sotuv />} />
        <Route path="/qurilish" element={<Nowstroy/>} />
        <Route path="/state:id" element={<State_id/>}/>
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/gallery" element={<Galery/>}/>
        <Route path="/ocompany" element={<Ocompany/>}/>
        <Route path="/connect" element={<Boglanish/>}/>
      </Routes>
      <Foter/>
      </>
  )
}

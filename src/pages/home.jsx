import Header from "components/header";
import Sidebar from "components/sidebar";
import { Route, Routes } from "react-router-dom";
import Tasks from "./tasks";

const Home = () =>{
  return (
    <>
      <div className="container-fluid p-0">

        <Header />

        <div className="row m-0 p-0">
          <div className="col-1 col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-11 col-md-10 p-0">
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/tasks/:folder" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
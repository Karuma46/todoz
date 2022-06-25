import Header from "components/header";
import Sidebar from "components/sidebar";
import { Route, Routes } from "react-router-dom";
import Tasks from "./tasks";

const Home = () =>{
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10 p-0">
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
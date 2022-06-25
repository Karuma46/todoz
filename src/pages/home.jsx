import Header from "components/header";
import Sidebar from "components/sidebar";
import AddTaskForm from "./parts/addTaskForm";
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
            <Tasks />
          </div>
        </div>
      </div>

      <AddTaskForm />
    </>
  )
}

export default Home;
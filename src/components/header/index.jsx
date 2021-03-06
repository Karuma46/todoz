import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () =>{
  return(
    <>
      <div className="row m-0">
        <div className="col-12 p-0 header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <h1> <span>To</span>Doz</h1>
              </Link>
            </div>

            <div className="avatar d-flex">
              <div className="avatarImg">
                <img src="" alt="" />
              </div>
              <div className="avatarName">
                <p>Steve Karuma</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Header
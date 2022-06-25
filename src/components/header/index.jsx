import "./styles.scss";

const Header = () =>{
  return(
    <>
      <div className="row">
        <div className="col-12 header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <h1> <span>To</span>Doz</h1>
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
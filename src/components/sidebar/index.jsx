import "./styles.scss";

const Sidebar = () =>{
  return(
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="material-symbols-rounded">Calendar_Today</span> Today
        </div>
        <div className="foldersHeader">
          <h3>Folders</h3>
        </div>

        <div className="sidebarItem">
          <span className="material-symbols-rounded">Folder</span> Shopping
        </div>

        <div className="sidebarItem">
          <span className="material-symbols-rounded">Folder</span> Chores
        </div>

        <div className="sidebarItem">
          <span className="material-symbols-rounded">add</span> Add a Folder
        </div>

      </div>
    </>
  )
}

export default Sidebar
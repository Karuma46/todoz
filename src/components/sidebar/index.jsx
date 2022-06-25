import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.scss";

const Sidebar = () =>{
  let {folder} = useParams()
  const [folders, setFolders] = useState([])
  const [showAddFolderForm, setShowAddFolderForm] = useState(false) 
  const [newFolder, setNewFolder] = useState({
    name: ''
  })

  const handleNewFolder = () => {
    folders.push(newFolder)
    localStorage.setItem('folders', JSON.stringify(folders))
    setShowAddFolderForm(false)
    setNewFolder({
      name: ''
    })
  }

  useEffect(() => {
    var getFolders = JSON.parse(localStorage.getItem('folders'))
    if(getFolders){
      setFolders(getFolders)
    }
  },[])


  return(
    <>
      <div className="sidebar">
        <Link to="/">
          <div className="sidebarItem">
            <span className="material-symbols-rounded">Calendar_Today</span> Today
          </div>
        </Link>
        <div className="foldersHeader">
          <h3>Folders</h3>
        </div>
        {
          folders.length > 0 && folders.map(f => (
            <Link to={`/tasks/${f.name}`} key={`${f.name}`}>
              <div className={`sidebarItem ${folder === f.name && 'active'}`}>
                <span className="material-symbols-rounded">Folder</span> {f.name}
              </div>
            </Link>
          ))
        }
        
        {
          showAddFolderForm && 
            <div className="sidebarItem">
              <div className="inputGroup">
                <input type="text" value={newFolder.name} placeholder="Folder Name" onChange={(e) => setNewFolder({...newFolder, name: e.target.value})}  />
                <span className="material-symbols-rounded" onClick={handleNewFolder}>Send</span>
              </div>
            </div>
        }

        {
          !showAddFolderForm && 
          <div className="sidebarItem" onClick={() => setShowAddFolderForm(true)}>
            <span className="material-symbols-rounded">add</span> Add a Folder
          </div>
        }

      </div>
    </>
  )
}

export default Sidebar
import { useContext } from "react"
import { PromptContext } from "./context"
import "./style.scss"

const PromptComponent = () => {

  let {showPrompt, setShowPrompt, promptText, doAffirm} = useContext(PromptContext)

  if(!showPrompt){
    return ''
  }

  return (
    <>
      <div className="promptWrap" id="promptWrap">
        <div className="prompt">
          <div className="promptText">
            <p>{promptText}</p>
          </div>
          <div className="promptActions">
            <span className="material-symbols-rounded" onClick={doAffirm}>
              check
            </span>
            <span className="material-symbols-rounded" onClick={() => setShowPrompt(false)}>
              cancel
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromptComponent
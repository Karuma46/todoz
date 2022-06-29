import React, {createContext, useState} from 'react'

export const PromptContext = createContext()

export const PromptContextProvider = ({children}) => {
  return (
    <>
      <PromptContext.Provider value={usePromptContextProvider()}>
        {children}
      </PromptContext.Provider>
    </>
  )
}

const usePromptContextProvider = () => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptText, setPromptText] = useState('')
  const [promptAffirm, setPromptAffirm] = useState({
    method: {},
    uuid: ''
  })
  const prompt = document.getElementById('promptWrap')

  const doAffirm = () => {
    promptAffirm.method(promptAffirm.uuid)
  }


  return { promptText, setPromptText, showPrompt, setShowPrompt, doAffirm, setPromptAffirm}
}
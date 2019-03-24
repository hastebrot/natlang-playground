import { produce } from "immer"
import { processParagraphs, paragraphs } from "./fixtures"

const text = processParagraphs(paragraphs)

export const initialState = {
  text: text.slice(0, 1),
}

export const reducer = (state, action) => {
  if (action.type === "UPDATE_PARAGRAPH") {
    const { paragraph } = action.payload
    return produce(state, state => {
      state.text[paragraph.index].style.color = "red"
      state.text[paragraph.index].style.fontWeight = "bold"
      return state
    })
  } else if (action.type === "UPDATE_WORD") {
    const { paragraph, word } = action.payload
    return produce(state, state => {
      state.text[paragraph.index].words[word.index].style.color = "red"
      state.text[paragraph.index].words[word.index].style.fontWeight = "bold"
      return state
    })
  }
}

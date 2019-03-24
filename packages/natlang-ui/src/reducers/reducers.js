import { produce } from "immer"

export const initialState = {
  count: 0,
}

export const reducer = (state, action) => {
  if (action.type === "foo") {
    return produce(state, state => {
      state.count += 1
      return state
    })
  }
}

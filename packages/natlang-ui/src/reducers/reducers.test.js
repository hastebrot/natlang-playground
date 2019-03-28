import { useReducer } from "react"
import { renderHook, act, cleanup } from "react-hooks-testing-library"
import { textReducer, textInitialState } from "./reducers"

describe("reducers", () => {
  afterEach(cleanup)

  test("process paragraphs", () => {
    // given:
    const { result } = renderHook(() => {
      return useReducer(textReducer, textInitialState)
    })

    // expect:
    const [state] = result.current
    expect(state.text).toMatchSnapshot()
  })

  test("update paragraph style", () => {
    // given:
    const { result } = renderHook(() => {
      return useReducer(textReducer, textInitialState)
    })

    // when:
    act(() => {
      const [state, dispatch] = result.current
      dispatch({
        type: "UPDATE_PARAGRAPH",
        payload: { paragraph: { index: 0 } },
      })
    })

    // then:
    const [state] = result.current
    expect(state.text[0].style).toMatchSnapshot()
  })

  test("update word style", () => {
    // given:
    const { result } = renderHook(() => {
      return useReducer(textReducer, textInitialState)
    })

    // when:
    act(() => {
      const [state, dispatch] = result.current
      dispatch({
        type: "UPDATE_WORD",
        payload: { paragraph: { index: 0 }, word: { index: 0 } },
      })
    })

    // then:
    const [state] = result.current
    expect(state.text[0].words[0].style).toMatchSnapshot()
  })
})

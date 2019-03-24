import { useReducer } from "react"
import { renderHook, act, cleanup } from "react-hooks-testing-library"
import { reducer, initialState } from "./reducers"

describe("reducers", () => {
  afterEach(cleanup)

  test("init state", () => {
    // given:
    const { result } = renderHook(() => {
      return useReducer(reducer, initialState)
    })

    // expect:
    const [state] = result.current
    expect(state).toMatchInlineSnapshot(`
Object {
  "count": 0,
}
`)
  })

  test("change state", () => {
    // given:
    const { result } = renderHook(() => {
      return useReducer(reducer, initialState)
    })

    // when:
    act(() => {
      const [state, dispatch] = result.current
      dispatch({ type: "foo" })
    })

    // then:
    const [state] = result.current
    expect(state).toMatchInlineSnapshot(`
Object {
  "count": 1,
}
`)
  })
})

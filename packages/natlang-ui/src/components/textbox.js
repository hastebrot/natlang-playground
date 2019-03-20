import React, { Fragment, useState } from "react"
import { Pane, Text } from "fannypack"
import { produce } from "immer"

export default () => {
  const paragraphs =
    "Le rielaborazioni non sono vietate. Ma chi pretende di fare la vera carbonara deve usare solo queste materie: la tradizione è un ingrediente come gli altri."

  const _words = paragraphs
    .split(" ")
    .map((text, index) => ({ index, text, style: {} }))

  const [words, setWords] = useState(_words)

  return (
    <Pane padding="major-1" backgroundColor="white700">
      {words.map(word => (
        <Fragment key={word.index}>
          <Text
            onClick={event =>
              setWords(
                produce(state => {
                  state[word.index].style.color = "red"
                  state[word.index].style.fontWeight = "bold"
                })
              )
            }
            cursor="pointer"
            {...word.style}
          >
            {word.text}
          </Text>{" "}
        </Fragment>
      ))}
    </Pane>
  )
}

import React, { Fragment, useState } from "react"
import { Pane, Text } from "fannypack"
import { produce } from "immer"

export default ({ paragraphs }) => {
  const data = processParagraphs(paragraphs)
  const [words, setWords] = useState(data[0].words)

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

export const processParagraphs = paragraphsText => {
  const paragraphs = splitParagraphs(paragraphsText)
  const paragraphsData = paragraphs.map((paragraphText, index) => {
    const words = splitWords(paragraphText)
    const wordsData = words.map((wordText, index) => ({
      type: "word",
      index,
      text: wordText,
      style: {},
    }))
    return {
      type: "paragraph",
      index,
      text: paragraphText,
      words: wordsData,
    }
  })
  return paragraphsData
}

export const splitParagraphs = text => {
  return text.trim().split(/\n+/)
}

export const splitWords = text => {
  return text.split(/\s+/)
}

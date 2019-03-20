import React, { Fragment, useState } from "react"
import { Pane, Paragraph, Text } from "fannypack"
import { produce } from "immer"

export default ({ paragraphs, select }) => {
  const data = processParagraphs(paragraphs)
  const [_paragraphs, _setParagraphs] = useState(data)

  return (
    <Pane padding="major-2" backgroundColor="white700">
      {_paragraphs.map(paragraph => (
        <Paragraph
          key={paragraph.index}
          onClick={
            select === "paragraph" &&
            (event =>
              _setParagraphs(
                produce(state => {
                  state[paragraph.index].style.color = "red"
                  state[paragraph.index].style.fontWeight = "bold"
                  return state
                })
              ))
          }
          {...paragraph.style}
        >
          {paragraph.words.map(word => (
            <Fragment key={word.index}>
              <Text
                onClick={
                  select === "word" &&
                  (event =>
                    _setParagraphs(
                      produce(state => {
                        state[paragraph.index].words[word.index].style.color =
                          "red"
                        state[paragraph.index].words[
                          word.index
                        ].style.fontWeight = "bold"
                        return state
                      })
                    ))
                }
                cursor="pointer"
                {...word.style}
              >
                {word.text}
              </Text>{" "}
            </Fragment>
          ))}
        </Paragraph>
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
      style: {},
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

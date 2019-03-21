import React, { Fragment, useState } from "react"
import { Pane, Inline, InlineFlex, Box, Paragraph, Text } from "fannypack"
import { produce } from "immer"

export default ({ paragraphs, select, swimlanes = false }) => {
  const data = processParagraphs(paragraphs)
  const [_paragraphs, _setParagraphs] = useState(data)

  function updateParagraphState(paragraph) {
    _setParagraphs(
      produce(state => {
        state[paragraph.index].style.color = "red"
        state[paragraph.index].style.fontWeight = "bold"
        return state
      })
    )
  }

  function updateWordState(paragraph, word) {
    _setParagraphs(
      produce(state => {
        state[paragraph.index].words[word.index].style.color = "red"
        state[paragraph.index].words[word.index].style.fontWeight = "bold"
        return state
      })
    )
  }

  return (
    <Pane padding="major-2" backgroundColor="white700">
      {_paragraphs.map(paragraph => (
        <Paragraph
          key={paragraph.index}
          onClick={
            select === "paragraph"
              ? event => updateParagraphState(paragraph)
              : null
          }
          {...paragraph.style}
        >
          {paragraph.words.map(word => (
            <Fragment key={word.index}>
              {!swimlanes && (
                <Fragment>
                  <Text
                    onClick={
                      select === "word"
                        ? event => updateWordState(paragraph, word)
                        : null
                    }
                    cursor="pointer"
                    {...word.style}
                  >
                    {word.text}
                  </Text>{" "}
                </Fragment>
              )}
              {swimlanes && (
                <InlineFlex column padding="0.5em">
                  <Box>
                    <Text
                      _fontFamily="Menlo"
                      onClick={
                        select === "word"
                          ? event => updateWordState(paragraph, word)
                          : null
                      }
                      cursor="pointer"
                      {...word.style}
                    >
                      {word.text}
                    </Text>
                  </Box>
                  <Box color="gray200">
                    <Text _fontFamily="Chalkboard">
                      {word.text
                        .split("")
                        .reverse()
                        .join("")}
                    </Text>
                  </Box>
                </InlineFlex>
              )}
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

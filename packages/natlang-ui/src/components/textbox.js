import React, { Fragment, useState, useReducer } from "react"
import { Pane, Set, Box, Paragraph, Text, styled, css } from "fannypack"
import FixedSpace from "./FixedSpace"
import { reducer } from "../reducers/reducers"

export const TextboxBase = ({
  className,
  text,
  select,
  swimlanes = false,
  secondLane = false,
}) => {
  const [paragraphs, dispatchParagraphs] = useReducer(reducer, { text })

  return (
    <Pane padding="major-1" backgroundColor="white700" className={className}>
      {paragraphs.text.map(paragraph => (
        <Paragraph
          use={Set}
          key={paragraph.index}
          padding="0"
          spacing="0"
          onClick={
            select === "paragraph"
              ? event =>
                  dispatchParagraphs({
                    type: "UPDATE_PARAGRAPH",
                    payload: { paragraph },
                  })
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
                        ? event =>
                            dispatchParagraphs({
                              type: "UPDATE_WORD",
                              payload: { paragraph, word },
                            })
                        : null
                    }
                    cursor="pointer"
                    {...word.style}
                  >
                    {word.text}
                  </Text>
                  <FixedSpace />
                </Fragment>
              )}
              {swimlanes && (
                <Set isVertical isFilled padding="0.25em" spacing="0.25em">
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
                  {secondLane && (
                    <Box color="gray200">
                      <Text _fontFamily="Chalkboard">{word.text2}</Text>
                    </Box>
                  )}
                </Set>
              )}
            </Fragment>
          ))}
        </Paragraph>
      ))}
    </Pane>
  )
}

export default styled(TextboxBase)`
  & .red {
    color: red;
  }
`

export const statusColors = css`
  span.status0 {
    background-color: #addfff;
    color: #000000;
  }
  span.status1 {
    background-color: #f5b8a9;
    color: #000000;
  }
  span.status2 {
    background-color: #f5cca9;
    color: #000000;
  }
  span.status3 {
    background-color: #f5e1a9;
    color: #000000;
  }
  span.status4 {
    background-color: #f5f3a9;
    color: #000000;
  }
  span.status5 {
    background-color: #ddffdd;
    color: #000000;
  }
  span.status99 {
    background-color: #f8f8f8;
    border-bottom: solid 2px #ccffcc;
    color: #000000;
  }
  span.status98 {
    background-color: #f8f8f8;
    border-bottom: dashed 1px #000000;
    color: #000000;
  }
`

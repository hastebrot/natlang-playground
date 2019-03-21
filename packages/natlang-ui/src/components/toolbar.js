import React, { Fragment, useState } from "react"
import { Pane, Flex, Box, Set, Group, Button, Tag } from "fannypack"
import { produce } from "immer"

export default ({ select, setSelect, edit, setEdit }) => {
  const paragraphButtonStyles = select === "paragraph" && {
    palette: "gray700",
    color: "white",
  }
  const wordButtonStyles = select === "word" && {
    palette: "gray700",
    color: "white",
  }
  const editButtonStyles = edit && {
    palette: "gray700",
    color: "white",
  }

  return (
    <Pane padding="major-1" backgroundColor="white700">
      <Flex>
        <Box flex="1">
          <Group>
            <Button
              {...paragraphButtonStyles}
              onClick={event => setSelect("paragraph")}
            >
              Paragraphs
            </Button>
            <Button {...wordButtonStyles} onClick={event => setSelect("word")}>
              Words
            </Button>
          </Group>
        </Box>
        <Set>
          <Group>
            <Button>Accept</Button>
            <Button>Reject</Button>
          </Group>
          <Tag>1 selected</Tag>
          <Button
            {...editButtonStyles}
            onClick={event => setEdit(edit => !edit)}
          >
            Edit
          </Button>
        </Set>
      </Flex>
    </Pane>
  )
}

import React, { Fragment, useState } from "react"
import { Pane, Flex, Box, Set, Group, Button, Tag } from "fannypack"
import { produce } from "immer"

export default () => {
  return (
    <Pane padding="major-1" backgroundColor="white700">
      <Flex>
        <Box flex="1">
          <Group>
            <Button palette="gray700" color="white">
              Paragraphs
            </Button>
            <Button>Words</Button>
          </Group>
        </Box>
        <Set>
          <Tag>1 selected</Tag>
          <Group>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Group>
          <Group>
            <Button>Accept</Button>
            <Button>Reject</Button>
          </Group>
        </Set>
      </Flex>
    </Pane>
  )
}

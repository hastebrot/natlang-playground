import React, { Fragment, useState } from "react"
import { Box, Set, Pane, InputField } from "fannypack"

export default ({ children, ...otherProps }) => {
  return (
    <Box {...otherProps}>
      <Pane padding="major-2" backgroundColor="white700">
        <Set isVertical isFilled>
          <InputField label="word" placeholder="word" />
          <InputField label="translation" placeholder="translation" />
        </Set>
      </Pane>
    </Box>
  )
}

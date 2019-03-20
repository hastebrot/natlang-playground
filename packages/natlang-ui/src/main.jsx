import React, { Fragment, useState } from "react"
import {
  Pane,
  Flex,
  Box,
  Group,
  Hidden,
  Button,
  Textarea,
  ThemeProvider,
} from "fannypack"

export const LanguageBlock = ({}) => {
  const [paragraphs, setParagraphs] = useState(
    "Le rielaborazioni non sono vietate. Ma chi pretende di fare la vera carbonara deve usare solo queste materie: la tradizione è un ingrediente come gli altri."
  )
  const [paragraphsList, setParagraphsList] = useState([])

  return (
    <Pane margin="major-4">
      <Hidden.Container>
        {hidden => (
          <Fragment>
            <Flex padding="major-1" backgroundColor="white700">
              <Box flex="1">
                <Button onClick={hidden.show} disabled={hidden.isVisible}>
                  Add Paragraphs
                </Button>
              </Box>
              <Box>
                <Group>
                  <Button
                    palette="primary"
                    onClick={event => {
                      setParagraphsList(paragraphsList => [
                        ...paragraphsList,
                        paragraphs,
                      ])
                      hidden.hide()
                    }}
                  >
                    Accept
                  </Button>
                  <Button onClick={hidden.hide}>Reject</Button>
                </Group>
              </Box>
            </Flex>
            <Flex column>
              {paragraphsList &&
                paragraphsList.map((paragraphs, index) => (
                  <Box padding="major-1" key={index}>
                    {paragraphs}
                  </Box>
                ))}
            </Flex>
            <Hidden isVisible={hidden.isVisible}>
              <Box padding="major-1">
                <Textarea
                  isFullWidth
                  size="medium"
                  minHeight="300px"
                  value={paragraphs}
                  onChange={event => setParagraphs(event.target.value)}
                />
              </Box>
            </Hidden>
          </Fragment>
        )}
      </Hidden.Container>
    </Pane>
  )
}

export default () => {
  return (
    <ThemeProvider>
      <LanguageBlock />
    </ThemeProvider>
  )
}

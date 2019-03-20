import React from "react"
import { storiesOf } from "@storybook/react"
import { Pane, ThemeProvider } from "fannypack"
import Main from "../components/main"

const stories = storiesOf("Components/Main", module)
stories.addDecorator(story => (
  <ThemeProvider>
    <Pane padding="major-2">{story()}</Pane>
  </ThemeProvider>
))
stories.add("default", () => <Main />)
